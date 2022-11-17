declare const _default: {
    types: any[];
    methods: {
        init(): void;
        logTitle(title: any): void;
        writeSystemConfig(user: any): Promise<void>;
    };
    watch: {};
    events: {
        mounted(): void;
        created(): void;
        beforeSave(): void;
        saved(user: any): void;
        beforeDelete(): void;
        deleted(): void;
        childrenSaved(placeString: any): void;
        childrenPushed(placeString: any, id?: any): void;
        childrenDeleted(placeString: any, id?: any): void;
    };
};
export default _default;
