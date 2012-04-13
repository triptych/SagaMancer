/** javascript logic for sagamancer **/
YUI.add("sagamancer",function(Y){
        Y.log("sagamancer added");
    
    },'0.0.1',{
        requires: ['node']
    });
    
YUI().use("node","sagamancer", function(Y){
    Y.one("#loading").setContent("load happens");
    });    