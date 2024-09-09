export const cutText = (text: string)=>{    
    let firsttext = text.split(" ").slice(0, 3).join(" ");
    return firsttext;   
}
export const cutSecondText = (text: string)=>{    
    let result = text.split(" ").slice(3, -1).join(" ");
    return result;   
}
