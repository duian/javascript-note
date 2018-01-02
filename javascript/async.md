import Router from 'miox-router';
import querystring from 'querystring';
import _ from 'lodash';
import { Toast } from 'miox-vuc2x';
import { PG } from 'miox-u51-pg/full';
import * as api from './api/device';
import * as filter from './utils/filter';
import store from './store';
// import { Component, Webview, life } from 'miox-vue2x'
// import IndexPage from './webview/demo.jsx';
// import Test from './webview/test.jsx';

const Ro = new Router();
export default Ro;
Ro.use((app, next) => {
  PG.exec('hideNavigationBar');
  next();
});

Ro.use(async (app, next) => {
  if (app.isFilter) return next();
  if (app.captures[0] === '/') {
    let search = _.keys(app.query)[0];
    search = querystring.parse(search);
    // 获取地理位置
    const { Location } = await PG.exec('getLocation');
    // 获取设备信息
    let { DeviceInfo } = await PG.exec('getDeviceInfo');
    DeviceInfo = filter.plat(DeviceInfo);
    const data = { ...Location, ...search, ...DeviceInfo };
    console.log('data', data);
    await api.postDevice(data);
    app.isFilter = true;
    const response = await store.dispatch('getUser');
    // .then((res) => {
    //   return res;
    // });
    const { status, orderStatus } = response.status;
    console.log('res', response, status, orderStatus);
    next();
    // 获取地理位置
    // return PG.exec('getLocation')
    // .then((result) => {
      // 获取设备信息
      // return PG.exec('getDeviceInfo')
      // .then((res) => {
        // const { DeviceInfo } = res;
        // const options = {};
        // 安卓不存在plat信息
        // if (!DeviceInfo.plat) {
          // if (is.iOS()) {
            // options.plat = 1;
          // } else if (is.android()) {
            // options.plat = 2;
          // }
        // }
        // const data = _.assign(result.Location, search, res.DeviceInfo, options);
        // 发送设备&地理信息
    //     return api.postDevice(data)
    //     .then(() => {
    //       app.isFilter = true;
    //       // 获取用户信息
    //       return store.dispatch('getUser')
    //       .then((res2) => {
    //         const { status, orderStatus } = res2.status;
    //         switch (status) {
    //           // 无借款
    //           case 0:
    //             next();
    //             break;
    //           // 借款中
    //           case 1:
    //             // TODO: 自定义的orderStutaus
    //             switch (orderStatus) {
    //               case 1:
    //                 app.history.push('/loan-progress');
    //                 break;
    //               default:
    //                 next();
    //             }
    //             break;
    //           // 冻结中
    //           case 2:
    //             next();
    //             break;
    //           default:
    //             next();
    //         }
    //       });
    //     })
    //     .catch(err => Toast.error(err.body.errors[0].message, 3));
    //   })
    //   .catch(() => console.log('getDeviceInfo error'));
    // })
    // .catch(() => console.log('getLocation error'));
  }
  return next();
});

// 测试组件
// Ro.patch('/test', async (ctx) => {
//   await ctx.render(Test);
// });
//
// Ro.patch('/demo', async (ctx) => {
//   await ctx.render(IndexPage);
// });

// Ro.patch('/inner', async (ctx) => {
//   const inner = await new Promise((resolve) => {
//     require.ensure([], require => (
//       resolve(require('./webview/innerView.jsx'))
//     ));
//   });
//
//   await ctx.render(inner);
// });

// 借款首页
Ro.patch('/', async (ctx) => {
  const inner = await new Promise((resolve) => {
    require.ensure([], require => (
      resolve(require('./webview/loan'))
    ));
  });

  await ctx.render(inner);
});


// 认证页面
Ro.patch('/verifications', async (ctx) => {
  const inner = await new Promise((resolve) => {
    require.ensure([], require => (
      resolve(require('./webview/verifications'))
    ));
  });

  await ctx.render(inner);
});

// 历史纪录
Ro.patch('/loan-list', async (ctx) => {
  const inner = await new Promise((resolve) => {
    require.ensure([], require => (
      resolve(require('./webview/loan-list'))
    ));
  });

  await ctx.render(inner);
});

// 贷款确认
Ro.patch('/loan-confirm', async (ctx) => {
  const inner = await new Promise((resolve) => {
    require.ensure([], require => (
      resolve(require('./webview/loan-confirm'))
    ));
  });

  await ctx.render(inner);
});

// 贷款状态
Ro.patch('/loan-status', async (ctx) => {
  const inner = await new Promise((resolve) => {
    require.ensure([], require => (
      resolve(require('./webview/loan-status'))
    ));
  });

  await ctx.render(inner);
});

// 贷款进度
Ro.patch('/loan-progress', async (ctx) => {
  const inner = await new Promise((resolve) => {
    require.ensure([], require => (
      resolve(require('./webview/loan-progress'))
    ));
  });

  await ctx.render(inner);
});

// 还款
Ro.patch('/pay', async (ctx) => {
  const inner = await new Promise((resolve) => {
    require.ensure([], require => (
      resolve(require('./webview/pay'))
    ));
  });

  await ctx.render(inner);
});

// 还款确认
Ro.patch('/pay-confirm', async (ctx) => {
  const inner = await new Promise((resolve) => {
    require.ensure([], require => (
      resolve(require('./webview/pay-confirm'))
    ));
  });

  await ctx.render(inner);
});

// 还款状态
Ro.patch('/pay-status', async (ctx) => {
  const inner = await new Promise((resolve) => {
    require.ensure([], require => (
      resolve(require('./webview/pay-status'))
    ));
  });

  await ctx.render(inner);
});

// 还款卡管理
Ro.patch('/card-manage', async (ctx) => {
  const inner = await new Promise((resolve) => {
    require.ensure([], require => (
      resolve(require('./webview/card-manage'))
    ));
  });

  await ctx.render(inner);
});

// 添加银行卡
Ro.patch('/add-card', async (ctx) => {
  const inner = await new Promise((resolve) => {
    require.ensure([], require => (
      resolve(require('./webview/add-card'))
    ));
  });

  await ctx.render(inner);
});

// 设置交易密码
Ro.patch('/password', async (ctx) => {
  const inner = await new Promise((resolve) => {
    require.ensure([], require => (
      resolve(require('./webview/password'))
    ));
  });

  await ctx.render(inner);
});

// 修改交易密码
Ro.patch('/modify-password', async (ctx) => {
  const inner = await new Promise((resolve) => {
    require.ensure([], require => (
      resolve(require('./webview/modify-password'))
    ));
  });

  await ctx.render(inner);
});

// 修改交易密码
Ro.patch('/reset-password', async (ctx) => {
  const inner = await new Promise((resolve) => {
    require.ensure([], require => (
      resolve(require('./webview/reset-password'))
    ));
  });

  await ctx.render(inner);
});

// 实名认证
Ro.patch('/name', async (ctx) => {
  const inner = await new Promise((resolve) => {
    require.ensure([], require => (
      resolve(require('./webview/name'))
    ));
  });

  await ctx.render(inner);
});

// 提额认证
Ro.patch('/increase-amount', async (ctx) => {
  const inner = await new Promise((resolve) => {
    require.ensure([], require => (
      resolve(require('./webview/increase-amount'))
    ));
  });

  await ctx.render(inner);
});

// 身份证认证
Ro.patch('/identity', async (ctx) => {
  const inner = await new Promise((resolve) => {
    require.ensure([], require => (
      resolve(require('./webview/identity'))
    ));
  });

  await ctx.render(inner);
});

// 人脸识别
Ro.patch('/face', async (ctx) => {
  const inner = await new Promise((resolve) => {
    require.ensure([], require => (
      resolve(require('./webview/face'))
    ));
  });

  await ctx.render(inner);
});

Ro.patch('/real', async (ctx) => {
  const inner = await new Promise((resolve) => {
    require.ensure([], require => (
      resolve(require('./webview/real'))
    ));
  });

  await ctx.render(inner);
});
