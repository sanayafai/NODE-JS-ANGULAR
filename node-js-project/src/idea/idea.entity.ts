import {
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne, OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import {UserEntity} from '../user/user.entity';
import {CommentEntity} from '../comment/comment.entity';

@Entity()
export class IdeaEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ CreateDateColumn()
    created: Date;

    @Column('text')
    idea: string;

    @Column('text')
    desciption: string;

    @ManyToOne(type => UserEntity, author => author.ideas)
    author: UserEntity;

    @UpdateDateColumn()
    updated: Date;

    @ManyToMany(type => UserEntity, {cascade: true})
    @JoinTable()
    upvotes: UserEntity[];

    @ManyToMany(type => UserEntity, {cascade: true})
    @JoinTable()
    downvotes: UserEntity[];

    @OneToMany(type => CommentEntity, comment => comment.idea)
    comments: CommentEntity[];
}
