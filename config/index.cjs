/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx71982f6c3656feb0',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'bd63060d7756f1555660619e81df4ad3',
  MAX_PUSH_ONE_MINUTE: 5,
  // 配合MAX_PUSH_ONE_MINUTE使用，休眠<SLEEP_TIME>毫秒后再发送剩余消息，不填则默认为65000
  SLEEP_TIME: 65000,
  PROVINCE: '深圳',
  CITY: '龙岗',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小卢',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ojzPe6rfh-Z0cDu56dyfvjR_Ibk4',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'MCx98a6oY3RJ2E9AVEMLXA71UQ0H2yg1sMm8iaCf2qw',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      province: '深圳',
      city: '龙岗',
      horoscopeDate: '07-04',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '自己', year: '1996', date: '05-19',
        },
        {
          type: '*节日', name: '端午节', year: '1996', date: '05-05',
        },
        {
          type: '*节日', name: '中秋节', year: '1996', date: '08-15',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '节日', name: '元旦', year: '2023', date: '01-01',
        },
        {
         type: '节日', name: '清明节', year: '2023', date: '04-05',
        },
        {
          type: '节日', name: '劳动节', year: '2022', date: '05-01',
        },
        {
          type: '节日', name: '国庆节', year: '2022', date: '10-01',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
    {
       // 想要发送的人的名字
      name: '小卢',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ojzPe6rfh-Z0cDu56dyfvjR_Ibk4',
      //星座寄语发送模板
      useTemplateId: 'tPwxgVVHBUMbaQNJABB4D0b1pT22bAghvnP5AwCJvRE',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '07-04',
    }, 
 
   {
     //每日一句
       // 想要发送的人的名字
      name: '小卢',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ojzPe6rfh-Z0cDu56dyfvjR_Ibk4',
      //星座寄语发送模板
      useTemplateId: 'SQVZVUfizlnb5dv6ND6lSvTfnAjGz-DqxSWJIPDbV9w',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '07-04',
    }, 
    
    {
      // 想要发送的人的名字
      name: '叉姐',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ojzPe6szP3r6pYz0yjT_Xz3P5CdY',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'MCx98a6oY3RJ2E9AVEMLXA71UQ0H2yg1sMm8iaCf2qw',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-18',
      
      province: '深圳',
      city: '龙岗',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '生日', name: '叉姐', year: '1999', date: '04-18',
        },
        {
          type: '*节日', name: '端午节', year: '1996', date: '05-05',
        },
        {
          type: '*节日', name: '中秋节', year: '1996', date: '08-15',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '节日', name: '元旦', year: '2023', date: '01-01',
        },
        {
         type: '节日', name: '清明节', year: '2023', date: '04-05',
        },
        {
          type: '节日', name: '劳动节', year: '2022', date: '05-01',
        },
        {
          type: '节日', name: '国庆节', year: '2022', date: '10-01',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
    {
       // 想要发送的人的名字
      name: '叉姐',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ojzPe6szP3r6pYz0yjT_Xz3P5CdY',
      //星座寄语发送模板
      useTemplateId: 'tPwxgVVHBUMbaQNJABB4D0b1pT22bAghvnP5AwCJvRE',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-18',
    },
      {
     //每日一句
       // 想要发送的人的名字
      name: '叉姐',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ojzPe6szP3r6pYz0yjT_Xz3P5CdY',
      //星座寄语发送模板
      useTemplateId: 'SQVZVUfizlnb5dv6ND6lSvTfnAjGz-DqxSWJIPDbV9w',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-18',
    },
    
    {
      // 想要发送的人的名字
      name: '陈芝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ojzPe6n7w2mLa8SdW6TxAZHo2LdI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'MCx98a6oY3RJ2E9AVEMLXA71UQ0H2yg1sMm8iaCf2qw',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-27',
      
      province: '深圳',
      city: '龙华',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '陈芝', year: '1999', date: '02-10',
        },
        {
          type: '*节日', name: '端午节', year: '1996', date: '05-05',
        },
        {
          type: '*节日', name: '中秋节', year: '1996', date: '08-15',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '节日', name: '元旦', year: '2023', date: '01-01',
        },
        {
         type: '节日', name: '清明节', year: '2023', date: '04-05',
        },
        {
          type: '节日', name: '劳动节', year: '2022', date: '05-01',
        },
        {
          type: '节日', name: '国庆节', year: '2022', date: '10-01',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
    {
       // 想要发送的人的名字
      name: '陈芝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ojzPe6n7w2mLa8SdW6TxAZHo2LdI',
      //星座寄语发送模板
      useTemplateId: 'tPwxgVVHBUMbaQNJABB4D0b1pT22bAghvnP5AwCJvRE',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-27',
    },
      {
     //每日一句
       // 想要发送的人的名字
      name: '陈芝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ojzPe6n7w2mLa8SdW6TxAZHo2LdI',
      //星座寄语发送模板
      useTemplateId: 'SQVZVUfizlnb5dv6ND6lSvTfnAjGz-DqxSWJIPDbV9w',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-27',
    },
    {
      // 想要发送的人的名字
      name: '点哥',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ojzPe6rWvWiqjEc0biFILW8B4cqc',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'MCx98a6oY3RJ2E9AVEMLXA71UQ0H2yg1sMm8iaCf2qw',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '07-27',
      
      province: '江苏',
      city: '无锡',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '生日', name: '点哥', year: '1999', date: '07-27',
        },
        {
          type: '*节日', name: '端午节', year: '1996', date: '05-05',
        },
        {
          type: '*节日', name: '中秋节', year: '1996', date: '08-15',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '节日', name: '元旦', year: '2023', date: '01-01',
        },
        {
         type: '节日', name: '清明节', year: '2023', date: '04-05',
        },
        {
          type: '节日', name: '劳动节', year: '2022', date: '05-01',
        },
        {
          type: '节日', name: '国庆节', year: '2022', date: '10-01',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
    {
       // 想要发送的人的名字
      name: '点哥',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ojzPe6rWvWiqjEc0biFILW8B4cqc',
      //星座寄语发送模板
      useTemplateId: 'tPwxgVVHBUMbaQNJABB4D0b1pT22bAghvnP5AwCJvRE',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '07-27',
    },
      {
     //每日一句
       // 想要发送的人的名字
      name: '点哥',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ojzPe6rWvWiqjEc0biFILW8B4cqc',
      //星座寄语发送模板
      useTemplateId: 'SQVZVUfizlnb5dv6ND6lSvTfnAjGz-DqxSWJIPDbV9w',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '07-27',
    }, 
  ],

  
  
  
  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'UDKn-UMVhf0R3ZZrPU-uemOZacv2066cL-nolgKxkRo',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ojzPe6rfh-Z0cDu56dyfvjR_Ibk4',
    }
  ],
    SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    { keyword: 'encourage_oneself', contents: '你主要的问题在于读书太少而想得太多' },
    // 这样配置的话，就会每次随机选一句话发送
    {
      keyword: 'lover_prattle',
      contents: [
        '因为太喜欢你，所以看谁都像是情敌。',
        '申请成为你爱里的永久居民。',
        '你很傻，你很笨，可我还是很羡慕你，因为你有我',
        '遇见你，就好像捡到了100斤的运气',
        '哪怕只有一天，也想用这张脸活一次。',
        '今天本该没有那么惊喜，但是你来了',
        '上一次喜欢你，是在说这句话之前',
        '今日份的美貌，也正常营业了',
        '这样的额美貌是真实存在的吗',
        '这个颜值我能舔一辈子',
        '她脸上的不是汗水而是玫瑰花的露水。',
        '我的天 这是什么级别的仙女。',
        '每天都是如此的魅力无穷。',
        '每一帧都如此令人心动。',
        '不要淋到雨啦，不然你会可爱到发芽。',
        '不用见日月，你就是星辰',
        '晚风轻踩着云朵 月亮在贩售快乐 你从银河后靠近我 我与星辉一同为你沉沦',
        '这世上一切美好的事情，你的脸就占了99％！',
        '你不化妆是天生丽质，化了妆是仙女下凡',
        '你怎么长成这样？符合我全部想象。',
        '除了故乡，我只为你一人写过月亮'
      ],
    }
    // 你可以不断按格式往下增加
    // ...
  ],
}

module.exports = USER_CONFIG
