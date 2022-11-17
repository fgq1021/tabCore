export declare const defaultTypes: {
    systemConfig: {
        title: string;
        data: {
            server: boolean;
            port: number;
        };
        dataStructure: ({
            ChineseName: string;
            name: string;
            dataType: string;
            note: string;
            default: string;
            settings: {
                unitType?: undefined;
            };
        } | {
            ChineseName: string;
            name: string;
            dataType: string;
            note: string;
            default: string;
            settings: {
                unitType: string;
            };
        })[];
    };
    sslConfig: {
        title: string;
        dataStructure: {
            ChineseName: string;
            name: string;
            dataType: string;
            note: string;
            default: string;
            settings: {};
        }[];
    };
    mongoConfig: {
        data: {
            user: string;
            host: string;
            port: number;
            db: string;
        };
        title: string;
        dataStructure: {
            ChineseName: string;
            name: string;
            dataType: string;
            note: string;
            default: string;
            settings: {};
        }[];
    };
    userConfig: {
        title: string;
        dataStructure: ({
            ChineseName: string;
            name: string;
            dataType: string;
            note: string;
            default: string;
            settings: {
                unit: string;
                unitType: string;
            };
        } | {
            ChineseName: string;
            name: string;
            dataType: string;
            note: string;
            default: string;
            settings: {
                unit: string;
                unitType?: undefined;
            };
        })[];
    };
    user: {
        title: string;
        dataStructure: ({
            ChineseName: string;
            name: string;
            dataType: string;
            note: string;
            default: string;
            settings: {
                unit: string;
                unitType?: undefined;
            };
        } | {
            ChineseName: string;
            name: string;
            dataType: string;
            note: string;
            default: string;
            settings: {
                unit: string;
                unitType: string;
            };
        })[];
    };
    rootUser: {
        title: string;
        dataStructure: ({
            ChineseName: string;
            name: string;
            dataType: string;
            note: string;
            default: string;
            settings: {
                unit: string;
                unitType?: undefined;
            };
        } | {
            ChineseName: string;
            name: string;
            dataType: string;
            note: string;
            default: string;
            settings: {
                unit: string;
                unitType: string;
            };
        })[];
    };
    typeLib: {
        title: string;
        dataStructure: {
            ChineseName: string;
            name: string;
            dataType: string;
            note: string;
            default: string;
            settings: {};
        }[];
    };
};
