var myChart = echarts.init(document.getElementById('container'));

var provinces = {
    '上海': '../asset/get/s/data-1482909900836-H1BC_1WHg.json',
    '河北': '../asset/get/s/data-1482909799572-Hkgu_yWSg.json',
    '山西': '../asset/get/s/data-1482909909703-SyCA_JbSg.json',
    '内蒙古': '../asset/get/s/data-1482909841923-rkqqdyZSe.json',
    '辽宁': '../asset/get/s/data-1482909836074-rJV9O1-Hg.json',
    '吉林': '../asset/get/s/data-1482909832739-rJ-cdy-Hx.json',
    '黑龙江': '../asset/get/s/data-1482909803892-Hy4__J-Sx.json',
    '江苏': '../asset/get/s/data-1482909823260-HkDtOJZBx.json',
    '浙江': '../asset/get/s/data-1482909960637-rkZMYkZBx.json',
    '安徽': '../asset/get/s/data-1482909768458-HJlU_yWBe.json',
    '福建': '../asset/get/s/data-1478782908884-B1H6yezWe.json',
    '江西': '../asset/get/s/data-1482909827542-r12YOJWHe.json',
    '山东': '../asset/get/s/data-1482909892121-BJ3auk-Se.json',
    '河南': '../asset/get/s/data-1482909807135-SJPudkWre.json',
    '湖北': '../asset/get/s/data-1482909813213-Hy6u_kbrl.json',
    '湖南': '../asset/get/s/data-1482909818685-H17FOkZSl.json',
    '广东': '../asset/get/s/data-1482909784051-BJgwuy-Sl.json',
    '广西': '../asset/get/s/data-1482909787648-SyEPuJbSg.json',
    '海南': '../asset/get/s/data-1482909796480-H12P_J-Bg.json',
    '四川': '../asset/get/s/data-1482909931094-H17eKk-rg.json',
    '贵州': '../asset/get/s/data-1482909791334-Bkwvd1bBe.json',
    '云南': '../asset/get/s/data-1482909957601-HkA-FyWSx.json',
    '西藏': '../asset/get/s/data-1482927407942-SkOV6Qbrl.json',
    '陕西': '../asset/get/s/data-1482909909703-SyCA_JbSg.json',
    '甘肃': '../asset/get/s/data-1482909780863-r1aIdyWHl.json',
    '青海': '../asset/get/s/data-1482909853618-B1IiOyZSl.json',
    '宁夏': '../asset/get/s/data-1482909848690-HJWiuy-Bg.json',
    '新疆': '../asset/get/s/data-1482909952731-B1YZKkbBx.json',
    '北京': '../asset/get/s/data-1482818963027-Hko9SKJrg.json',
    '天津': '../asset/get/s/data-1482909944620-r1-WKyWHg.json',
    '重庆': '../asset/get/s/data-1482909775470-HJDIdk-Se.json',
    '香港': '../asset/get/s/data-1461584707906-r1hSmtsx.json',
    '澳门': '../asset/get/s/data-1482909771696-ByVIdJWBx.json'
};

var data1 = [{
    name: '北京'
}, {
    name: '天津'
}, {
    name: '上海'
}, {
    name: '重庆'
}, {
    name: '河北'
}, {
    name: '河南'
}, {
    name: '云南'
}, {
    name: '辽宁'
}, {
    name: '黑龙江'
}, {
    name: '湖南'
}, {
    name: '安徽'
}, {
    name: '山东'
}, {
    name: '新疆'
}, {
    name: '江苏'
}, {
    name: '浙江'
}, {
    name: '江西'
}, {
    name: '湖北'
}, {
    name: '广西'
}, {
    name: '甘肃'
}, {
    name: '山西'
}, {
    name: '内蒙古'
}, {
    name: '陕西'
}, {
    name: '吉林'
}, {
    name: '福建'
}, {
    name: '贵州'
}, {
    name: '广东'
}, {
    name: '青海'
}, {
    name: '西藏'
}, {
    name: '四川'
}, {
    name: '宁夏'
}, {
    name: '海南'
}, {
    name: '台湾'
}, {
    name: '香港'
}, {
    name: '澳门'
}];
for (var i = 0; i < data1.length; i++) {
    data1[i].value = Math.round(Math.random() * 10000);
}

option = {
    tooltip: {
        //trigger: 'item'
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        x: 'right',
        y: 'center',
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            }
        }
    },
    series: [{
        name: '选择器',
        type: 'map',
        mapType: 'china',
        left: 'left',
        top: '25%',
        width: '50%',
        height:'50%',
        roam: true,
        selectedMode: 'single',
        showLegendSymbol:false,
        itemStyle: {
            normal: {
                label: {
                    show: true
                }
            },
            emphasis: {
                label: {
                    show: true
                }
            }
        },
        data: data1
    }],
    animation: false
};

myChart.setOption(option, true);

var data2 = [{
    name: '重庆市'
}, {
    name: '北京市'
}, {
    name: '天津市'
}, {
    name: '上海市'
}, {
    name: '香港'
}, {
    name: '澳门'
}, {
    name: '巴音郭楞蒙古自治州'
}, {
    name: '和田地区'
}, {
    name: '哈密地区'
}, {
    name: '阿克苏地区'
}, {
    name: '阿勒泰地区'
}, {
    name: '喀什地区'
}, {
    name: '塔城地区'
}, {
    name: '昌吉回族自治州'
}, {
    name: '克孜勒苏柯尔克孜自治州'
}, {
    name: '吐鲁番地区'
}, {
    name: '伊犁哈萨克自治州'
}, {
    name: '博尔塔拉蒙古自治州'
}, {
    name: '乌鲁木齐市'
}, {
    name: '克拉玛依市'
}, {
    name: '阿拉尔市'
}, {
    name: '图木舒克市'
}, {
    name: '五家渠市'
}, {
    name: '石河子市'
}, {
    name: '那曲地区'
}, {
    name: '阿里地区'
}, {
    name: '日喀则地区'
}, {
    name: '林芝地区'
}, {
    name: '昌都地区'
}, {
    name: '山南地区'
}, {
    name: '拉萨市'
}, {
    name: '呼伦贝尔市'
}, {
    name: '阿拉善盟'
}, {
    name: '锡林郭勒盟'
}, {
    name: '鄂尔多斯市'
}, {
    name: '赤峰市'
}, {
    name: '巴彦淖尔市'
}, {
    name: '通辽市'
}, {
    name: '乌兰察布市'
}, {
    name: '兴安盟'
}, {
    name: '包头市'
}, {
    name: '呼和浩特市'
}, {
    name: '乌海市'
}, {
    name: '海西蒙古族藏族自治州'
}, {
    name: '玉树藏族自治州'
}, {
    name: '果洛藏族自治州'
}, {
    name: '海南藏族自治州'
}, {
    name: '海北藏族自治州'
}, {
    name: '黄南藏族自治州'
}, {
    name: '海东地区'
}, {
    name: '西宁市'
}, {
    name: '甘孜藏族自治州'
}, {
    name: '阿坝藏族羌族自治州'
}, {
    name: '凉山彝族自治州'
}, {
    name: '绵阳市'
}, {
    name: '达州市'
}, {
    name: '广元市'
}, {
    name: '雅安市'
}, {
    name: '宜宾市'
}, {
    name: '乐山市'
}, {
    name: '南充市'
}, {
    name: '巴中市'
}, {
    name: '泸州市'
}, {
    name: '成都市'
}, {
    name: '资阳市'
}, {
    name: '攀枝花市'
}, {
    name: '眉山市'
}, {
    name: '广安市'
}, {
    name: '德阳市'
}, {
    name: '内江市'
}, {
    name: '遂宁市'
}, {
    name: '自贡市'
}, {
    name: '黑河市'
}, {
    name: '大兴安岭地区'
}, {
    name: '哈尔滨市'
}, {
    name: '齐齐哈尔市'
}, {
    name: '牡丹江市'
}, {
    name: '绥化市'
}, {
    name: '伊春市'
}, {
    name: '佳木斯市'
}, {
    name: '鸡西市'
}, {
    name: '双鸭山市'
}, {
    name: '大庆市'
}, {
    name: '鹤岗市'
}, {
    name: '七台河市'
}, {
    name: '酒泉市'
}, {
    name: '张掖市'
}, {
    name: '甘南藏族自治州'
}, {
    name: '武威市'
}, {
    name: '陇南市'
}, {
    name: '庆阳市'
}, {
    name: '白银市'
}, {
    name: '定西市'
}, {
    name: '天水市'
}, {
    name: '兰州市'
}, {
    name: '平凉市'
}, {
    name: '临夏回族自治州'
}, {
    name: '金昌市'
}, {
    name: '嘉峪关市'
}, {
    name: '普洱市'
}, {
    name: '红河哈尼族彝族自治州'
}, {
    name: '文山壮族苗族自治州'
}, {
    name: '曲靖市'
}, {
    name: '楚雄彝族自治州'
}, {
    name: '大理白族自治州'
}, {
    name: '临沧市'
}, {
    name: '迪庆藏族自治州'
}, {
    name: '昭通市'
}, {
    name: '昆明市'
}, {
    name: '丽江市'
}, {
    name: '西双版纳傣族自治州'
}, {
    name: '保山市'
}, {
    name: '玉溪市'
}, {
    name: '怒江傈僳族自治州'
}, {
    name: '德宏傣族景颇族自治州'
}, {
    name: '百色市'
}, {
    name: '河池市'
}, {
    name: '桂林市'
}, {
    name: '南宁市'
}, {
    name: '柳州市'
}, {
    name: '崇左市'
}, {
    name: '来宾市'
}, {
    name: '玉林市'
}, {
    name: '梧州市'
}, {
    name: '贺州市'
}, {
    name: '钦州市'
}, {
    name: '贵港市'
}, {
    name: '防城港市'
}, {
    name: '北海市'
}, {
    name: '怀化市'
}, {
    name: '永州市'
}, {
    name: '邵阳市'
}, {
    name: '郴州市'
}, {
    name: '常德市'
}, {
    name: '湘西土家族苗族自治州'
}, {
    name: '衡阳市'
}, {
    name: '岳阳市'
}, {
    name: '益阳市'
}, {
    name: '长沙市'
}, {
    name: '株洲市'
}, {
    name: '张家界市'
}, {
    name: '娄底市'
}, {
    name: '湘潭市'
}, {
    name: '榆林市'
}, {
    name: '延安市'
}, {
    name: '汉中市'
}, {
    name: '安康市'
}, {
    name: '商洛市'
}, {
    name: '宝鸡市'
}, {
    name: '渭南市'
}, {
    name: '咸阳市'
}, {
    name: '西安市'
}, {
    name: '铜川市'
}, {
    name: '清远市'
}, {
    name: '韶关市'
}, {
    name: '湛江市'
}, {
    name: '梅州市'
}, {
    name: '河源市'
}, {
    name: '肇庆市'
}, {
    name: '惠州市'
}, {
    name: '茂名市'
}, {
    name: '江门市'
}, {
    name: '阳江市'
}, {
    name: '云浮市'
}, {
    name: '广州市'
}, {
    name: '汕尾市'
}, {
    name: '揭阳市'
}, {
    name: '珠海市'
}, {
    name: '佛山市'
}, {
    name: '潮州市'
}, {
    name: '汕头市'
}, {
    name: '深圳市'
}, {
    name: '东莞市'
}, {
    name: '中山市'
}, {
    name: '延边朝鲜族自治州'
}, {
    name: '吉林市'
}, {
    name: '白城市'
}, {
    name: '松原市'
}, {
    name: '长春市'
}, {
    name: '白山市'
}, {
    name: '通化市'
}, {
    name: '四平市'
}, {
    name: '辽源市'
}, {
    name: '承德市'
}, {
    name: '张家口市'
}, {
    name: '保定市'
}, {
    name: '唐山市'
}, {
    name: '沧州市'
}, {
    name: '石家庄市'
}, {
    name: '邢台市'
}, {
    name: '邯郸市'
}, {
    name: '秦皇岛市'
}, {
    name: '衡水市'
}, {
    name: '廊坊市'
}, {
    name: '恩施土家族苗族自治州'
}, {
    name: '十堰市'
}, {
    name: '宜昌市'
}, {
    name: '襄樊市'
}, {
    name: '黄冈市'
}, {
    name: '荆州市'
}, {
    name: '荆门市'
}, {
    name: '咸宁市'
}, {
    name: '随州市'
}, {
    name: '孝感市'
}, {
    name: '武汉市'
}, {
    name: '黄石市'
}, {
    name: '神农架林区'
}, {
    name: '天门市'
}, {
    name: '仙桃市'
}, {
    name: '潜江市'
}, {
    name: '鄂州市'
}, {
    name: '遵义市'
}, {
    name: '黔东南苗族侗族自治州'
}, {
    name: '毕节地区'
}, {
    name: '黔南布依族苗族自治州'
}, {
    name: '铜仁地区'
}, {
    name: '黔西南布依族苗族自治州'
}, {
    name: '六盘水市'
}, {
    name: '安顺市'
}, {
    name: '贵阳市'
}, {
    name: '烟台市'
}, {
    name: '临沂市'
}, {
    name: '潍坊市'
}, {
    name: '青岛市'
}, {
    name: '菏泽市'
}, {
    name: '济宁市'
}, {
    name: '德州市'
}, {
    name: '滨州市'
}, {
    name: '聊城市'
}, {
    name: '东营市'
}, {
    name: '济南市'
}, {
    name: '泰安市'
}, {
    name: '威海市'
}, {
    name: '日照市'
}, {
    name: '淄博市'
}, {
    name: '枣庄市'
}, {
    name: '莱芜市'
}, {
    name: '赣州市'
}, {
    name: '吉安市'
}, {
    name: '上饶市'
}, {
    name: '九江市'
}, {
    name: '抚州市'
}, {
    name: '宜春市'
}, {
    name: '南昌市'
}, {
    name: '景德镇市'
}, {
    name: '萍乡市'
}, {
    name: '鹰潭市'
}, {
    name: '新余市'
}, {
    name: '南阳市'
}, {
    name: '信阳市'
}, {
    name: '洛阳市'
}, {
    name: '驻马店市'
}, {
    name: '周口市'
}, {
    name: '商丘市'
}, {
    name: '三门峡市'
}, {
    name: '新乡市'
}, {
    name: '平顶山市'
}, {
    name: '郑州市'
}, {
    name: '安阳市'
}, {
    name: '开封市'
}, {
    name: '焦作市'
}, {
    name: '许昌市'
}, {
    name: '濮阳市'
}, {
    name: '漯河市'
}, {
    name: '鹤壁市'
}, {
    name: '大连市'
}, {
    name: '朝阳市'
}, {
    name: '丹东市'
}, {
    name: '铁岭市'
}, {
    name: '沈阳市'
}, {
    name: '抚顺市'
}, {
    name: '葫芦岛市'
}, {
    name: '阜新市'
}, {
    name: '锦州市'
}, {
    name: '鞍山市'
}, {
    name: '本溪市'
}, {
    name: '营口市'
}, {
    name: '辽阳市'
}, {
    name: '盘锦市'
}, {
    name: '忻州市'
}, {
    name: '吕梁市'
}, {
    name: '临汾市'
}, {
    name: '晋中市'
}, {
    name: '运城市'
}, {
    name: '大同市'
}, {
    name: '长治市'
}, {
    name: '朔州市'
}, {
    name: '晋城市'
}, {
    name: '太原市'
}, {
    name: '阳泉市'
}, {
    name: '六安市'
}, {
    name: '安庆市'
}, {
    name: '滁州市'
}, {
    name: '宣城市'
}, {
    name: '阜阳市'
}, {
    name: '宿州市'
}, {
    name: '黄山市'
}, {
    name: '巢湖市'
}, {
    name: '亳州市'
}, {
    name: '池州市'
}, {
    name: '合肥市'
}, {
    name: '蚌埠市'
}, {
    name: '芜湖市'
}, {
    name: '淮北市'
}, {
    name: '淮南市'
}, {
    name: '马鞍山市'
}, {
    name: '铜陵市'
}, {
    name: '南平市'
}, {
    name: '三明市'
}, {
    name: '龙岩市'
}, {
    name: '宁德市'
}, {
    name: '福州市'
}, {
    name: '漳州市'
}, {
    name: '泉州市'
}, {
    name: '莆田市'
}, {
    name: '厦门市'
}, {
    name: '丽水市'
}, {
    name: '杭州市'
}, {
    name: '温州市'
}, {
    name: '宁波市'
}, {
    name: '舟山市'
}, {
    name: '台州市'
}, {
    name: '金华市'
}, {
    name: '衢州市'
}, {
    name: '绍兴市'
}, {
    name: '嘉兴市'
}, {
    name: '湖州市'
}, {
    name: '盐城市'
}, {
    name: '徐州市'
}, {
    name: '南通市'
}, {
    name: '淮安市'
}, {
    name: '苏州市'
}, {
    name: '宿迁市'
}, {
    name: '连云港市'
}, {
    name: '扬州市'
}, {
    name: '南京市'
}, {
    name: '泰州市'
}, {
    name: '无锡市'
}, {
    name: '常州市'
}, {
    name: '镇江市'
}, {
    name: '吴忠市'
}, {
    name: '中卫市'
}, {
    name: '固原市'
}, {
    name: '银川市'
}, {
    name: '石嘴山市'
}, {
    name: '儋州市'
}, {
    name: '文昌市'
}, {
    name: '乐东黎族自治县'
}, {
    name: '三亚市'
}, {
    name: '琼中黎族苗族自治县'
}, {
    name: '东方市'
}, {
    name: '海口市'
}, {
    name: '万宁市'
}, {
    name: '澄迈县'
}, {
    name: '白沙黎族自治县'
}, {
    name: '琼海市'
}, {
    name: '昌江黎族自治县'
}, {
    name: '临高县'
}, {
    name: '陵水黎族自治县'
}, {
    name: '屯昌县'
}, {
    name: '定安县'
}, {
    name: '保亭黎族苗族自治县'
}, {
    name: '五指山市'
}];

for (var i = 0; i < data2.length; i++) {
    data2[i].value = Math.round(Math.random() * 1000);
}
setTimeout(delay, 1000);

function delay() {
    //myChart.on("mapselectchanged", function (param)
    myChart.on("click", function(param) {
        var selectedProvince = param.name;

        if (!provinces[selectedProvince]) {
            option.series.splice(1);
            option.legend = null;
            option.visualMap = null;
            myChart.setOption(option, true);
            return;
        }
        //$.get('http://echarts.baidu.com/gallery/vendors/echarts/map/json/province/' + provinces[selectedProvince] + '.json', function (geoJson) {
        $.get(provinces[selectedProvince], function(geoJson) {
            echarts.registerMap(selectedProvince, geoJson);
            option.series[1] = {
                name: '选择器',
                type: 'map',
                mapType: selectedProvince,
                left: '50%',
                top: '25%',
                width: '50%',
                height:'50%',
                roam: true,
                selectedMode: 'single',
                itemStyle: {
                    normal: {
                        label: {
                            show: true
                        }
                    },
                    emphasis: {
                        label: {
                            show: true
                        }
                    }
                },
                data: data2
            };
            option.legend = {
                left: 'right',
                data: ['随机数据']
            };
            option.visualMap = {
                seriesIndex: 1,
                orient: 'horizontal',
                left: 'right',
                min: 0,
                max: 1000,
                color: ['orange', 'yellow'],
                text: ['高', '低'], // 文本，默认为数值文本
                splitNumber: 0
            };
            myChart.setOption(option, true);
        });
    });
}