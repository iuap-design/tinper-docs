## 输入框


### 基础
在普通的input元素上添加`u-form-control`样式

{% raw %}
<div class="example-content"><input type="text" class="u-form-control" id="exampleInput3"  placeholder="jane.doe@example.com"></div>



{% endraw %}
``` html
<input type="text" class="u-form-control" id="exampleInput3"  placeholder="jane.doe@example.com">
```




### 禁止输入
在普通输入框中添加`disabled` 属性

{% raw %}
<div class="example-content"><input type="text" class="u-form-control" id="exampleInput3" disabled placeholder="jane.doe@example.com">
</div>



{% endraw %}
``` html
<input type="text" class="u-form-control" id="exampleInput3" disabled placeholder="jane.doe@example.com">

```




### 带后缀

{% raw %}
<div class="example-content"><div class="u-input-group u-has-feedback">
    <input type="email" class="u-form-control" placeholder="jane.doe@example.com">
    <span class="u-form-control-feedback uf uf-search-light-2"></span>
</div></div>



{% endraw %}
``` html
<div class="u-input-group u-has-feedback">
    <input type="email" class="u-form-control" placeholder="jane.doe@example.com">
    <span class="u-form-control-feedback uf uf-search-light-2"></span>
</div>
```




### 必输项
当input框失去焦点时，校验输入的内容，如果内容长度大于0则隐藏必输字符`*`,否则显示

{% raw %}
<div class="example-content"><div class="u-form-group">
    <label for="exampleInput3">必输:</label>
    <div class="u-input-group u-has-feedback must-in">
        <div class="u-input-group-before " style="color: red;">*</div>
        <input type="text" class="u-form-control" id="exampleInput3" placeholder="jane.doe@example.com">
        <span class="u-form-control-feedback uf uf-search-light-2"></span>
    </div>
</div></div>



<script>
var mustinDom=document.querySelectorAll('.must-in input');
var mustinlen=mustinDom.length;
var checkInput=function(){
    //console.log(this+'---'+this.previousSibling+'----'+this.previousSibling.innerHTML);
    if(this.value.length>0){
        this.previousElementSibling.innerHTML='';
    }else{
        this.previousElementSibling.innerHTML='*';
    }
}
if(mustinlen>0){
    for(var i=0;i< mustinlen;i++){
        u.on(mustinDom[i],'blur',checkInput);
        u.on(mustinDom[i],'keydown',function(){
        	this.previousElementSibling.innerHTML='';
        });
    }
}

</script>

{% endraw %}
``` html
<div class="u-form-group">
    <label for="exampleInput3">必输:</label>
    <div class="u-input-group u-has-feedback must-in">
        <div class="u-input-group-before " style="color: red;">*</div>
        <input type="text" class="u-form-control" id="exampleInput3" placeholder="jane.doe@example.com">
        <span class="u-form-control-feedback uf uf-search-light-2"></span>
    </div>
</div>
```

``` js
var mustinDom=document.querySelectorAll('.must-in input');
var mustinlen=mustinDom.length;
var checkInput=function(){
    //console.log(this+'---'+this.previousSibling+'----'+this.previousSibling.innerHTML);
    if(this.value.length>0){
        this.previousElementSibling.innerHTML='';
    }else{
        this.previousElementSibling.innerHTML='*';
    }
}
if(mustinlen>0){
    for(var i=0;i< mustinlen;i++){
        u.on(mustinDom[i],'blur',checkInput);
        u.on(mustinDom[i],'keydown',function(){
        	this.previousElementSibling.innerHTML='';
        });
    }
}

```
