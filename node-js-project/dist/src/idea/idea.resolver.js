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
const graphql_1 = require("@nestjs/graphql");
const idea_service_1 = require("./idea.service");
const comment_service_1 = require("../comment/comment.service");
let IdeaResolver = class IdeaResolver {
    constructor(ideaService, commentService) {
        this.ideaService = ideaService;
        this.commentService = commentService;
    }
    ideas(page) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.ideaService.showAll(page);
        });
    }
    comments(idea) {
        const { id } = idea;
        return this.commentService.showByIdea(id);
    }
};
__decorate([
    graphql_1.Query('ideas'),
    __param(0, graphql_1.Args('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], IdeaResolver.prototype, "ideas", null);
__decorate([
    graphql_1.ResolveProperty(),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], IdeaResolver.prototype, "comments", null);
IdeaResolver = __decorate([
    graphql_1.Resolver('Idea'),
    __metadata("design:paramtypes", [idea_service_1.IdeaService, comment_service_1.CommentService])
], IdeaResolver);
exports.IdeaResolver = IdeaResolver;
//# sourceMappingURL=idea.resolver.js.map