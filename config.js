module.exports = {
  // 项目相关部分代码，复制后应首先进行这些配置
  "project" : "Demo",     
  "prefix" : "dm",
  "resultCssFileName" : "main.scss",
  "cleanFileType" : ["../.sass-cache", "../.sass-cache/**/*"],

  // 项目的路径配置，建议尽量使用推荐的路径，若要修改，请保持与 config.rb 中的指向的目录保持一致，但需要注意因为相对位置不同（这里是以 qmui_sass 目录为 Base Path），所以这里的值应该比 config.rb 中的多了一个 ../
  "htmlSourcePath" : ["../../UI_html/**/*.html"],
  "imagesSourcePath" : "../project/images", 
  "htmlResultPath" : "../../UI_html_result",
  "imagesResultPath" : "../../public/style/images",
  "independentImagesDirectory" : "/independent", 

  "commentTemplate" : "模板 include 引擎的相关配置",
  "openIncludeFunction" : true,
  "includePrefix" : "@@"
};
