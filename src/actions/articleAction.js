export const addArticle = (article)=>{

    return {type:"addArticle", payload:article}
}
export const updateArticle = (articleId,content)=>{

    return {type:"updateArticle", payload:{articleId,content}}
}
export const deleteArticle = (articleId)=>{

    return {type:"deleteArticle", payload:articleId}
}
export const searchArticle = (keyword)=>{

    return {type:"searchArticle", payload:keyword}
}