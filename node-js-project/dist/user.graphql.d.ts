declare type User = {
    id: !ID;
    username: !String;
    created: !String;
    bookmarks: [!Idea];
    ideas: [!Idea];
};
declare type Query = {
    users(page: [!User]): any;
};
