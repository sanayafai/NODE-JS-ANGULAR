"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const idea_entity_1 = require("./idea.entity");
const user_entity_1 = require("../user/user.entity");
let IdeaService = class IdeaService {
    constructor(ideaRepository, userRepository) {
        this.ideaRepository = ideaRepository;
        this.userRepository = userRepository;
    }
    toResponseObject(idea) {
        const responseObject = Object.assign({}, idea, { author: idea.author.toResponseObject(false) });
        if (responseObject.upvotes) {
            responseObject.upvotes = idea.upvotes.length;
        }
        if (responseObject.downvotes) {
            responseObject.downvotes = idea.downvotes.length;
        }
        return responseObject;
    }
    ensureOwnerShip(idea, userId) {
        if (idea.author.id !== userId) {
            throw new common_1.HttpException('Incorrect user', common_1.HttpStatus.UNAUTHORIZED);
        }
    }
    showAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const ideas = yield this.ideaRepository.find({ relations: ['author', 'upvotes', 'downvotes'] });
            return ideas.map(idea => this.toResponseObject(idea));
        });
    }
    create(userId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOne({ where: { id: userId } });
            const idea = yield this.ideaRepository.create(Object.assign({}, data, { author: user }));
            yield this.ideaRepository.save(idea);
            return this.toResponseObject(idea);
        });
    }
    read(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const idea = yield this.ideaRepository.findOne({ where: { id }, relations: ['author'] });
            if (!idea) {
                throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
            }
            return this.toResponseObject(idea);
        });
    }
    update(id, userId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const idea = yield this.ideaRepository.findOne({ where: { id }, relations: ['author'] });
            if (!idea) {
                throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
            }
            this.ensureOwnerShip(idea, userId);
            yield this.ideaRepository.update({ id }, data);
            return this.toResponseObject(idea);
        });
    }
    destroy(id, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const idea = yield this.ideaRepository.findOne({ where: { id }, relations: ['author'] });
            if (!idea) {
                throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
            }
            this.ensureOwnerShip(idea, userId);
            yield this.ideaRepository.delete({ id });
            return idea;
        });
    }
    bookmarkIdea(id, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const idea = yield this.ideaRepository.findOne({ where: id });
            const user = yield this.userRepository.findOne({ where: userId, relations: ['bookmarks'] });
            if (user.bookmarks !== null && user.bookmarks.filter(bookmark => bookmark.id === idea.id).length < 1) {
                user.bookmarks.push(idea);
                yield this.userRepository.save(user);
            }
            else {
                throw new common_1.HttpException('Idea is already bookmarked', common_1.HttpStatus.BAD_REQUEST);
            }
            return user.toResponseObject();
        });
    }
    unbookmarkIdea(id, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const idea = yield this.ideaRepository.findOne({ where: id });
            const user = yield this.userRepository.findOne({ where: userId, relations: ['bookmarks'] });
            if (user.bookmarks.filter(bookmark => bookmark.id === idea.id).length > 0) {
                user.bookmarks = user.bookmarks.filter(bookmark => bookmark.id !== idea.id);
                yield this.userRepository.save(user);
            }
            else {
                throw new common_1.HttpException('Idea is already bookmarked', common_1.HttpStatus.BAD_REQUEST);
            }
            return user.toResponseObject();
        });
    }
};
IdeaService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(idea_entity_1.IdeaEntity)),
    __param(1, typeorm_1.InjectRepository(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], IdeaService);
exports.IdeaService = IdeaService;
//# sourceMappingURL=idea.service.js.map