Ext.data.JsonP.KISSY_Component_Manager({"tagname":"class","name":"KISSY.Component.Manager","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":true,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-KISSY.Component.Manager","members":{"cfg":[],"property":[],"method":[{"name":"addComponent","tagname":"method","owner":"KISSY.Component.Manager","meta":{},"id":"method-addComponent"},{"name":"getComponent","tagname":"method","owner":"KISSY.Component.Manager","meta":{},"id":"method-getComponent"},{"name":"getConstructorByXClass","tagname":"method","owner":"KISSY.Component.Manager","meta":{},"id":"method-getConstructorByXClass"},{"name":"getCssClassWithPrefix","tagname":"method","owner":"KISSY.Component.Manager","meta":{},"id":"method-getCssClassWithPrefix"},{"name":"getXClassByConstructor","tagname":"method","owner":"KISSY.Component.Manager","meta":{},"id":"method-getXClassByConstructor"},{"name":"removeComponent","tagname":"method","owner":"KISSY.Component.Manager","meta":{},"id":"method-removeComponent"},{"name":"setConstructorByXClass","tagname":"method","owner":"KISSY.Component.Manager","meta":{},"id":"method-setConstructorByXClass"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":65,"files":[{"filename":"manager.js","href":"manager2.html#KISSY-Component-Manager"}],"html_meta":{},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/manager2.html#KISSY-Component-Manager' target='_blank'>manager.js</a></div></pre><div class='doc-contents'><p>Manage component metadata.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addComponent' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.Manager'>KISSY.Component.Manager</span><br/><a href='source/manager2.html#KISSY-Component-Manager-method-addComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.Manager-method-addComponent' class='name expandable'>addComponent</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> id, <a href=\"#!/api/KISSY.Component.Controller\" rel=\"KISSY.Component.Controller\" class=\"docClass\">KISSY.Component.Controller</a> component</span> )</div><div class='description'><div class='short'>associate id with component ...</div><div class='long'><p>associate id with component</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>component</span> : <a href=\"#!/api/KISSY.Component.Controller\" rel=\"KISSY.Component.Controller\" class=\"docClass\">KISSY.Component.Controller</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.Manager'>KISSY.Component.Manager</span><br/><a href='source/manager2.html#KISSY-Component-Manager-method-getComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.Manager-method-getComponent' class='name expandable'>getComponent</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> id</span> ) : <a href=\"#!/api/KISSY.Component.Controller\" rel=\"KISSY.Component.Controller\" class=\"docClass\">KISSY.Component.Controller</a></div><div class='description'><div class='short'>get component by id ...</div><div class='long'><p>get component by id</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/KISSY.Component.Controller\" rel=\"KISSY.Component.Controller\" class=\"docClass\">KISSY.Component.Controller</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getConstructorByXClass' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.Manager'>KISSY.Component.Manager</span><br/><a href='source/manager2.html#KISSY-Component-Manager-method-getConstructorByXClass' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.Manager-method-getConstructorByXClass' class='name expandable'>getConstructorByXClass</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> classNames</span> ) : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></div><div class='description'><div class='short'>Get component constructor by css class name. ...</div><div class='long'><p>Get component constructor by css class name.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>classNames</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Class names separated by space.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getCssClassWithPrefix' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.Manager'>KISSY.Component.Manager</span><br/><a href='source/manager2.html#KISSY-Component-Manager-method-getCssClassWithPrefix' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.Manager-method-getCssClassWithPrefix' class='name expandable'>getCssClassWithPrefix</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> css</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>complete css by prefix prefixCls ...</div><div class='long'><p>complete css by prefix prefixCls</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>css</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getXClassByConstructor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.Manager'>KISSY.Component.Manager</span><br/><a href='source/manager2.html#KISSY-Component-Manager-method-getXClassByConstructor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.Manager-method-getXClassByConstructor' class='name expandable'>getXClassByConstructor</a>( <span class='pre'><a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> constructor</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Get css class name for this component constructor. ...</div><div class='long'><p>Get css class name for this component constructor.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>constructor</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Component's constructor.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.Manager'>KISSY.Component.Manager</span><br/><a href='source/manager2.html#KISSY-Component-Manager-method-removeComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.Manager-method-removeComponent' class='name expandable'>removeComponent</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> id</span> )</div><div class='description'><div class='short'>remove association id with component ...</div><div class='long'><p>remove association id with component</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setConstructorByXClass' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.Manager'>KISSY.Component.Manager</span><br/><a href='source/manager2.html#KISSY-Component-Manager-method-setConstructorByXClass' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.Manager-method-setConstructorByXClass' class='name expandable'>setConstructorByXClass</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> className, <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> componentConstructor</span> )</div><div class='description'><div class='short'>Associate css class with component constructor. ...</div><div class='long'><p>Associate css class with component constructor.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>className</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Component's class name.</p>\n</div></li><li><span class='pre'>componentConstructor</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Component's constructor.</p>\n</div></li></ul></div></div></div></div></div></div></div>"});