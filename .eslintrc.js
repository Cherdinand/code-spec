module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  rules: {
    eqeqeq: 1, // 警告使用全等
    singleQuote: 0,
    'no-console': 0, //不禁用console
    'no-var': 2, //对var禁止
    semi: 2, //强制使用分号
    'semi-spacing': [2, { before: false, after: true }], // 强制分号前后不允许空格
    'no-unused-vars': [2, { vars: 'all', args: 'after-used' }], //不能有声明后未被使用的变量或参数
    'no-cond-assign': 2, //禁止在条件表达式中使用赋值语句
    'no-const-assign': 2, //禁止修改const声明的变量
    'no-duplicate-case': 2, //switch中的case标签不能重复
    'no-dupe-args': 2, //函数参数不能重复
    'no-func-assign': 2, //禁止重复的函数声明
    'no-redeclare': 2, //禁止重复声明变量
    'no-spaced-func': 2, //函数调用时 函数名与()之间不能有空格
    camelcase: 0, //强制驼峰法命名
    'jsx-quotes': [2, 'prefer-double'], //强制在JSX属性（jsx-quotes）中一致使用双引号
    'react/jsx-key': 2, //在数组或迭代器中验证JSX具有key属性
    'react/jsx-no-duplicate-props': 2, //防止在JSX中重复的props
    'react/jsx-no-undef': 1, //在JSX中禁止未声明的变量
    'react/jsx-uses-vars': 2, //防止在JSX中使用的变量被错误地标记为未使用
    'prefer-arrow-callback': 0, //比较喜欢箭头回调
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVerson: 'latest',
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    },
  },
  extends: ['prettier'],
  plugins: ['prettier', 'react'],
};
