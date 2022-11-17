function aType(name, ChineseName, note?, settings?) {
    const typeData = {
        name,
        ChineseName,
        note,
        settings: settings || []
    }
    return typeData
}

function aInput(name, ChineseName, dataType, note?, d?, settings?) {
    const typeData = {
        name,
        ChineseName,
        note,
        dataType,
        default: d,
        settings: settings || []
    }
    return typeData
}

export const keyTypes = [
    aType('String', '字符串', '可填写任意字符',
        [aInput('range', '字数范围', 'NumberRange')]),
    aType('Number', '数字', '可填写任意数字',
        [
            aInput('int', '整数', 'Boolean', '整数型数字'),
            aInput('range', '范围', 'NumberRange')
        ]),
    aType('Array', '数组', '本系统中的元素组',
        [aInput('unit', '单元种类', 'UnitSelect', '列表默认创建的种类')]),
    aType('Object', '对象', '本系统中的元素',
        [aInput('unit', '单元种类', 'UnitSelect', '如设定此项则初始化时创建的种类')]),
    aType('File', '文件', ''),
    aType('Directory', '文件夹', ''),
    aType('Image', '图片', ''),
    // aType('MapTile', '地图瓦片', '请选择瓦片文件夹'),
    // aType('FileBase64', '文件Base64', '文件太大会卡'),
    aType('Video', '视频', ''),
    aType('Live', '直播', '默认为阿里云，可手动调整数据',
        [
            aInput('streaming', '推流中', 'Boolean'),
            aInput('streamUrl', '推流地址', 'String'),
            aInput('liveUrl', '拉流地址', 'String'),
        ]),
    aType('Audio', '音频', ''),
    aType('Boolean', '布尔值', '布尔值只有是否两个状态'),
    aType('Selector', '选择器', '请在子键值中添加选项',
        [
            aInput('min', '最少选择数', 'Number', '', 0),
            aInput('max', '最多选择数', 'Number', '', 1),
            aInput('sub', '子项', 'Array',
                [
                    aInput('option', '选择项', 'OptionMaker')
                ]),
        ]),
    aType('Type', '类型', '选择类型'),
    // aType('TypeSelect', '类型组', '选择类型',
    //     [
    //         aInput('min', '最少选择数', 'Number', '', 0),
    //         aInput('max', '最多选择数', 'Number', '', 1),
    //     ]),
    // aType('Style', '样式', '选择样式'),
    // aType('StyleSelect', '样式组', '选择样式',
    //     [
    //         aInput('min', '最少选择数', 'Number', '', 0),
    //         aInput('max', '最多选择数', 'Number', '', 1),
    //     ]),
    aType('User', '用户', '选择用户'),
    // aType('UserSelect', '用户组', '选择用户',
    //     [
    //         aInput('min', '最少选择数', 'Number', '', 0),
    //         aInput('max', '最多选择数', 'Number', '', 1),
    //     ]),
    aType('Password', '密码', ''),
    aType('Date', '日期', ''),
    aType('Form', '表单', '创建一个可供用户填写当表单，请在子键值中添加表单内容'),
    aType('Payment', '支付', '最终发起支付时当价格'),
    aType('Money', '金额', '可填写任意金额'),
    aType('RichText', '富文本', '用户通过富文本编辑器创建内容'),
    aType('HTML', '富文本（源码）', '需要用户输入HTML源码'),
    aType('Color', '颜色', '选择一种颜色'),
    aType('Function', '功能', '直接执行Type文件中的功能'),
]
