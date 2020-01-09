<template>
<div class="form-design">
    <h3>
        表单设置：  <text><span style="color:#FF0000">（修改表单设计将会丢失原有数据，请慎重操作）</span></text>
    </h3>
    <div class="form-design-box">
        <div class="form-design-sider dragArea from-design-control-toolbars">
            <div class="from-design-control-toolbars-container">
                <h4>常用控件</h4>
                <div class="drag-box">
                    <div class="b-view-control-static" data-b-view-control-type="Text">
                        <div class="b-view-control-label">
                            <i class="icon-text_bold2"></i>
                            <span>单行文本框</span>
                        </div>
                    </div>
                    <div class="b-view-control-static" data-b-view-control-type="Textarea">
                        <div class="b-view-control-label">
                            <i class="icon-task_custom_looks_6"></i>
                            <span>数值</span>
                        </div>
                    </div>
                    <div class="b-view-control-static" data-b-view-control-type="Radio">
                        <div class="b-view-control-label">
                            <i class="icon-task_custom_amount_money"></i>
                            <span>金额</span>
                        </div>
                    </div>
                    <div class="b-view-control-static" data-b-view-control-type="Checkbox">
                        <div class="b-view-control-label">
                            <i class="icon-task_custom_markunread"></i>
                            <span>邮箱</span>
                        </div>
                    </div>
                    <div class="b-view-control-static" data-b-view-control-type="Number">
                        <div class="b-view-control-label">
                            <i class="icon-text_bold2"></i>
                            <span>单行文本框</span>
                        </div>
                    </div>
                    <div class="b-view-control-static" data-b-view-control-type="Select">
                        <div class="b-view-control-label">
                            <i class="icon-text_bold2"></i>
                            <span>单行文本框</span>
                        </div>
                    </div>
                    <div class="b-view-control-static" data-b-view-control-type="Date">
                        <div class="b-view-control-label">
                            <i class="icon-text_bold2"></i>
                            <span>单行文本框</span>
                        </div>
                    </div>
                    <div class="b-view-control-static" data-b-view-control-type="DateDuring">
                        <div class="b-view-control-label">
                            <i class="icon-text_bold2"></i>
                            <span>单行文本框</span>
                        </div>
                    </div>
                    <div class="b-view-control-static" data-b-view-control-type="Upload">
                        <div class="b-view-control-label">
                            <i class="icon-text_bold2"></i>
                            <span>单行文本框</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-design-content">
            <div class="form-design-details">
                <div class="form-design-sortable dropArea bpm-from-design-editingarea">
                    <div class="form-design-sortable-handle dropArea-tip">
                        <p>点击或拖动左侧组件到改区域</p>
                        <p>创建表单</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="from-design-property-editor controlBox">
            <div class="tab tab-primary">
                <ul class="tab-nav">
                    <li class="current">
                        控件属性
                    </li>
                    <li>
                        流程属性
                    </li>
                </ul>
            </div>
            <div class="bpm-from-design-property-editor-container">
                <div class="edit-control">
                    <div class="controlForm">
                        <div class="tip">字段控件标题 :</div>
                        <input type="text" class="controlTitle">
                    </div>

                    <div class="controlForm">
                        <div class="tip">是否必填 :</div>
                        <label for="radio-true" class="control-radio">
                            是
                            <input name="nessesary-nessesary" type="radio" id="radio-true" class="controlRadio-nessesary" value='1'>
                            <i class="control-placeholder"></i>
                        </label>

                        <label for="radio-false" class="right control-radio">
                            否
                            <input name="nessesary-nessesary" type="radio" id="radio-false" class="controlRadio-nessesary"
                                   checked="checked" value='0'>
                            <i class="control-placeholder"></i>
                        </label>
                    </div>

                    <div class="controlForm control-input-default control-special drop-hidden">
                        <div class="tip">默认内容 :</div>
                        <input type="text" class="input-default">
                    </div>

                    <div class="controlForm control-number-default control-number control-special drop-hidden">
                        <div class="tip">默认数值 :</div>
                        <input type="number" class="number-default">
                    </div>
                    <div class="controlForm control-number-max control-number control-special drop-hidden">
                        <div class="tip">最大数值 :</div>
                        <input type="number" class="number-max" value="100">
                    </div>
                    <div class="controlForm control-number-min control-number control-special drop-hidden">
                        <div class="tip">最小数值 :</div>
                        <input type="number" class="number-min" value="-100">
                    </div>

                    <div class="controlForm control-number-decimal control-number control-special drop-hidden">
                        <div class="tip">最多小数位 :</div>
                        <select name="" id="decimal" class="number-decimal">
                            <option value="0">0位</option>
                            <option value="1">1位</option>
                            <option value="2">2位</option>
                            <option value="3">3位</option>
                            <option value="4">4位</option>
                            <option value="5">5位</option>
                        </select>
                    </div>

                    <div class="controlForm control-input-width control-special drop-hidden">
                        <div class="tip">最大输入长度 :</div>
                        <input type="number" class="input-max-length">
                    </div>

                    <div class="controlForm control-textarea-width control-special drop-hidden">
                        <div class="tip">最大输入长度 :</div>
                        <input type="number" class="textarea-max-length">
                    </div>

                    <div class="controlForm control-special control-options drop-hidden">
                        <div class="tip">选项设置 :</div>
                        <textarea name="options" rows="3">option1,option2</textarea>
                        <ul class="option-box"></ul>
                        @*<div class="option-select"></div>*@
                    </div>

                    <div class="controlForm control-now control-special drop-hidden">
                        <input type="checkbox" class="controlCheckbox-date"> <span>当前时间</span>
                    </div>

                    <div class="controlForm control-upload control-special drop-hidden">
                        <div class="tip">上传设置 :</div>
                        <input type="checkbox" class="controlCheckbox-upload"> <span>只能上传一个文件</span>
                    </div>

                    <div class="controlForm control-title-visibilily control-special drop-hidden">
                        <div class="tip">是否显示 :</div>
                        <label for="radio-title-show" class="control-radio">
                            是
                            <input name="title-visibilily" type="radio" id="radio-title-show" class="controlRadio-title" checked="checked" value='1'>
                            <i class="control-placeholder"></i>
                        </label>

                        <label for="radio-title-hidden" class="right control-radio">
                            否
                            <input name="title-visibilily" type="radio" id="radio-title-hidden" class="controlRadio-title"
                                   value='0'>
                            <i class="control-placeholder"></i>
                        </label>
                    </div>

                    <div class="controlForm control-date control-special drop-hidden">
                        <div class="tip">日期格式 :</div>
                        <div class="data-radio">
                            <label for="">
                                <input name="date-format" type="radio" class="controlRadio-date" checked value='年-月-日 时:分'>
                                <span>年-月-日 时:分</span>
                            </label>
                        </div>
                        <div class="data-radio">
                            <label for="">
                                <input name="date-format" type="radio" class="controlRadio-date" value='年-月-日'>
                                <span>年-月-日</span>
                            </label>
                        </div>
                        <div class="data-radio">
                            <label for="">
                                <input name="date-format" type="radio" class="controlRadio-date" value='年-月'>
                                <span>年-月</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="control-form-box hide">
                    <div class="controlForm flow-control-editable">
                        <div class="tip">设置可编辑节点 :</div>
                        <div class="flow-box-apply">
                            <label class="control-checkbox">
                                <input type="checkbox" name="name" value="申请" />
                                <i class="control-placeholder"></i>
                                申请
                            </label>
                        </div>
                    </div>

                    <div class="controlForm flow-control-visible">
                        <div class="tip">设置不可见节点 :</div>
                        <div class="flow-box-apply">
                            <label class="control-checkbox">
                                <input type="checkbox" name="name" value="申请" />
                                <i class="control-placeholder"></i>
                                申请
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="form-design-btn">
        <button class="btn" type="submit" id="formdrag-edit-save-btn">
            <i class="fa fa-save"></i>
            保存
        </button>
        <button class="btn" type="button" id="formdrag-edit-preview-btn">
            <i class="fa fa-eye"></i>
            预览
        </button>
        <button class="btn" type="button" id="formdrag-edit-cancel-btn">
            <i class="fa fa-close"></i>
            取消
        </button>
    </div> -->
</div>
</template>

<style lang="less">
.form-design {
    height: 100%;
    // overflow: hidden;
    > h3 {
        box-sizing: border-box;
        height: 50px;
        line-height: 50px;
        box-shadow: 0 2px 4px rgba(0,0,0,.15);
        padding: 0px 24px;
        font-weight: normal;
        font-size: 16px;
        text-align: left;
        position: absolute;
        width: 100%;
    }

    &-box{
        box-sizing: border-box;
        padding-top: 50px;
        height: 100%;
        display: flex;
        flex: 1;
    }

    &-sider{
        background: #f1f2f3;
        width: 300px;
        font-size: 12px;
    }
}

.from-design-control-toolbars{
    padding: 26px 20px;
    h4 {
        font-size: 13px;
        line-height: 1;
    }
}
.drag-box{
    margin: 12px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.b-view-control-static{
    width: 124px;
    box-sizing: border-box;
    line-height: 36px;
    margin-bottom: 12px;
    padding-left: 12px;
    list-style: none;
    position: relative;
    background-color: #fff;
    border: 1px solid transparent;
    box-shadow: 0 0 4px rgba(0,0,0,.16);
    border-radius: 4px;
    font-size: 13px;
    cursor: grab;
    &:hover,
    &.active{
        border-color: #2196f3;
        color: #2196f3;
    }

    i {
        display: inline-block;
        width: 25px;
        font-size: 16px;
    }
}
.from-design-property-editor{
    width: 350px;
    background-color: #fcfdfe;
    padding: 24px 20px;
}
.form-design-content{
    flex: 1;
    border-right: 1px solid rgb(234, 234, 234);
}
.dropArea-tip{
    border: 1px dashed #ccc;
    border-radius: 5px;
    width: 70%;
    margin: 0 auto;
    padding: 50px;
    margin-top: 50px;
    text-align: center;
}
</style>
