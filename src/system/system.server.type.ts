import { writeFile } from 'fs/promises';
import { join } from 'path';

export default {
  types: [],
  methods: {
    init() {
      console.log('init', this._id);
    },
    logTitle(title) {
      console.log(title, this.title);
    },
    async writeSystemConfig(el, user) {
      console.warn('写入启动配置');
      const systemConfigJson = await this.toJson({}, user);
      console.warn(systemConfigJson);
      console.warn(
        '初始化',
        '写入位置：',
        join(__dirname, '../tab.config.json'),
      );
      await writeFile(
        join(__dirname, '../tab.config.json'),
        JSON.stringify(systemConfigJson),
      );
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
      this.writeSystemConfig({}, user);
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
