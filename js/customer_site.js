const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
        api: 'http://sdzyapi.com/api.php/provide/vod/from/sdm3u8',
        name: '红牛资源',
        api: 'http://collect.wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
        api: 'http://sdzyapi.com/api.php/provide/vod/from/sdm3u8',
        name: '闪电资源',
        api: 'http://sdzyapi.com/api.php/provide/vod/from/sdm3u8',
        name: '红牛资源',
        api: 'http://sdzyapi.com/api.php/provide/vod/from/sdm3u8',
        name: '红牛资源',
        api: 'http://sdzyapi.com/api.php/provide/vod/from/sdm3u8',
        name: '红牛资源',
        api: 'http://sdzyapi.com/api.php/provide/vod/from/sdm3u8',
        name: '红牛资源',
        api: 'http://sdzyapi.com/api.php/provide/vod/from/sdm3u8',
        name: '红牛资源',
        api: 'http://sdzyapi.com/api.php/provide/vod/from/sdm3u8',
        name: '红牛资源',
        api: 'http://sdzyapi.com/api.php/provide/vod/from/sdm3u8',
        name: '红牛资源',
        api: 'http://sdzyapi.com/api.php/provide/vod/from/sdm3u8',
        name: '红牛资源',
        api: 'http://sdzyapi.com/api.php/provide/vod/from/sdm3u8',
        name: '红牛资源',
        
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
