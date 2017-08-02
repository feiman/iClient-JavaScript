var SuperMap = require('../SuperMap');
var ProcessingServiceBase = require('./ProcessingServiceBase');
var BuildCacheJobParameter = require('./BuildCacheJobParameter');

/**
 * @class SuperMap.BuildCacheJobsService
 * @description 创建大数据缓存服务类
 * @augments SuperMap.ProcessingServiceBase
 * @param url -{String} 大数据缓存服务地址。
 * @param options - {Object} 交互服务时所需可选参数。
 */
SuperMap.BuildCacheJobsService = SuperMap.Class(ProcessingServiceBase, {

    /*
     * @function SuperMap.BuildCacheJobsService.prototype.initialize
     * @description SuperMap.BuildCacheJobsService 的构造函数
     * @param url -{String} 大数据缓存服务地址。
     * @param options - {Object} 交互服务时所需可选参数。
     */
    initialize: function (url, options) {
        ProcessingServiceBase.prototype.initialize.apply(this, arguments);
        this.url += "/mapping/buildCache";
    },

    /**
     * @inheritDoc
     */
    destroy: function () {
        ProcessingServiceBase.prototype.destroy.apply(this, arguments);
    },

    /**
     * @function SuperMap.BuildCacheJobsService.prototype.getBuildCacheJobs
     * @description 获取创建的大数据缓存
     */
    getBuildCacheJobs: function () {
        return ProcessingServiceBase.prototype.getJobs.apply(this, [this.url]);
    },

    /**
     * @function SuperMap.BuildCacheJobsService.prototype.getBuildCacheJob
     * @description 获取指定 id的大数据缓存
     * @param id - {String} 大数据缓存id
     */
    getBuildCacheJob: function (id) {
        return ProcessingServiceBase.prototype.getJobs.apply(this, [this.url + '/' + id]);
    },

    /**
     * @function SuperMap.BuildCacheJobsService.prototype.addBuildCacheJob
     * @description 新建大数据缓存服务
     * @param params - {BuildCacheJobParameter}地图缓存参数类
     * @param seconds - {String} 开始创建后，获取创建成功结果的时间间隔
     */
    addBuildCacheJob: function (params, seconds) {
        ProcessingServiceBase.prototype.addJob.apply(this, [this.url, params, BuildCacheJobParameter, seconds]);
    },

    CLASS_NAME: "SuperMap.BuildCacheJobsService"
});

module.exports = SuperMap.BuildCacheJobsService;