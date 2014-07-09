var $ = require('jquery'),
  expect = require('expect.js'),
  sinon = require('sinon'),
  Mask = require('../index');


var el = $('<div style="width:500px;height:500px;background-color:red;"></div>').appendTo('body');

var loadMask =new Mask.LoadMask({el:el,msg:'加载数据'});

$('#btnShow').on('click',function(){
  loadMask.show();
});
$('#btnHide').on('click',function(){
 loadMask.hide();
});

describe('屏蔽元素',function(){
  it('屏蔽元素',function(){
    Mask.maskElement(el);
    expect(el.find('.bui-ext-mask').length).not.to.be(0);
  });

  it('解除屏蔽元素',function(){
    Mask.unmaskElement(el);
    expect(el.find('.bui-ext-mask').length).to.be(0);
  });

});

describe('加载数据，屏蔽元素',function(){

  
  it('加载数据',function(){
    loadMask.show();
    expect(el.find('.bui-ext-mask').length).not.to.be(0);
  });

  it('解除屏蔽元素',function(){
    loadMask.hide();
    expect(el.find('.bui-ext-mask').length).to.be(0);
  });
});
