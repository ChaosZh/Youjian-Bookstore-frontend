//window href jumping
function goto(path){
    let current_p=window.location.href;
    let split_p=current_p.split('/');
    split_p=split_p.slice(0,-2);
    split_p.push(path);
    split_p.push(path+'.html');
    let later_p=split_p.join('/');
    // console.log(later_p);
    window.location.href=later_p;
}