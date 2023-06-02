# Steps

## Using create-react-app create a react demo

## combined with husky + lint-staged + eslint + prettier to create code specification

### 代码规范的相关技术应该专事专办

由于eslint也是具备一部分的格式化代码的能力，所以当eslint与prettier一起合作的时候，应该让禁用eslint的格式化代码的能力，让格式化代码的工作交给prettier来做。

1. 与编辑器相关的所有配置（结尾行、缩进风格、缩进大小等等）应该由 EditorConfig 来处理。
1. 和代码格式相关的一切事物应该由 Prettier 处理。
1. 剩下的（代码质量）则由 ESLint 负责。

### 注意事项

当我们项目突然想引入ts的时候，除了要添加对应的parser（@typescript-eslint/parser），plugin（plugin:@typescript-eslint/recommended），还有一件重要的事情是要记得添加禁用lint格式化规则的config（prettier/@typescript-eslint），