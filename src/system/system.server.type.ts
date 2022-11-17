export default {
    types: [],
    methods: {
        init() {
            console.log('init', this._id);
        },
        logTitle(title) {
            console.log(title, this.title);
        },
        async writeSystemConfig(user) {
            await this.api().tab.writeSystemConfig(user)
            this.api().tab.close();
        },
    },
    watch: {},
    events: {
        mounted() {
            this.logTitle('mounted');
            this.init();
        },
        created() {
            this.logTitle('created');
        },
        beforeSave() {
            this.logTitle('beforeSave');
        },
        saved(user) {
            this.logTitle('saved');
        },
        beforeDelete() {
            this.logTitle('beforeDelete');
        },
        deleted() {
            this.logTitle('deleted');
        },
        childrenSaved(placeString) {
            console.log(placeString);
        },
        childrenPushed(placeString, id?) {
            console.log(placeString, id);
        },
        childrenDeleted(placeString, id?) {
            console.log(placeString, id);
        },
    },
};
