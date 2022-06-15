/*
    Mustache.js templates used to render parts of the screen
*/
APP.nostr.gui.templates = function(){
    let _lookup = {
        // basic template for screen we use
        'screen' : [
            '<div class="row header-row" >',
                '<div class="col-sm-12" style="height:100%;">',
                    '<div id="header-con" style="height:100%">',
                    '</div>',
                '</div>',
            '</div>',
            '<div class="row main-row" >',
                '<div class="col-sm-12" style="height:100%">',
                    '<div style="height:100%;">',
                        '<div id="main-con" style="height:100%" >',
                        '</div>',
                    '</div>',
                '</div>',
            '</div>'
        ],
        'screen-profiles-search' : [
            //the input
            '<div style="width:100%;overflow:hidden; height:40px;">',
                '<input placeholder="search" type="text" class="form-control" id="search-in" />',
            '</div>',
            //profiles listed here
            '<div id="list-con" style="overflow-y:auto;height: calc(100% - 40px);"></div>'
        ],
        // same as above, maybe will end up different or myabe this will be the template for basic search page
        'screen-events-search' : [
            '<div style="width:100%;overflow:hidden; height:40px;">',
                '<input placeholder="search" type="text" class="form-control" id="search-in" />',
            '</div>',
            '<div id="list-con" style="overflow-y:auto;height: calc(100% - 40px);"></div>'
        ],
        'head' : [
            '<div id="profile-but" class="header-button"></div>',
            '<div id="event-search-but" class="header-button">',
                '<svg class="bi" style="height:100%;width:100%;padding-left:10%;padding-right:10%;">',
                    '<use xlink:href="/bootstrap_icons/bootstrap-icons.svg#search"/>',
                '</svg>',
            '</div>',
            '<div id="profile-search-but" class="header-button">',
                '<svg class="bi" style="height:100%;width:100%;padding-left:10%;padding-right:10%;">',
                    '<use xlink:href="/bootstrap_icons/bootstrap-icons.svg#person-plus-fill"/>',
                '</svg>',
            '</div>',
            '<div id="home-but" class="header-button" style="margin-left:25%;margin-right:25%;">',
                '<svg class="bi" style="height:100%;width:100%;padding-left:10%;padding-right:10%;">',
                    '<use xlink:href="/bootstrap_icons/bootstrap-icons.svg#app"/>',
                '</svg>',
            '</div>',
            '<div id="relay-but" class="header-button" style="float:right;">',
                '<svg class="bi" style="height:100%;width:100%;padding-left:10%;padding-right:10%;">',
                    '<use xlink:href="/bootstrap_icons/bootstrap-icons.svg#diagram-3"/>',
                '</svg>',
            '</div>'
        ],
        // templates for modals
        'modal-note-post' : [
            '<div>',
                // event.id is to stop render of the div when not replying
                '{{#event.id}}',
                    '{{{#event}}}',
                        '{{> event}}',
                    '{{{/event}}}',
                '{{/event.id}}',
            '</div>',
            '<div>',
                '<textarea id="nostr-post-text" class="form-control" rows="10" placeholder="whats going down?"></textarea>',
            '</div>'
        ],
        // the render for when we don't have a profile (user hasn't selected one)
        'no_user_profile_button' : [
            '<svg class="bi" style="height:100%;width:100%;">',
                '<use xlink:href="/bootstrap_icons/bootstrap-icons.svg#person-circle"/>',
            '</svg>'
        ],
        // container area for notifications, top of screen
        'notification-container' : '<div id="notifications" style="position:absolute;opacity:0.9;z-index:100;width:100%"></div>',
        // notification content
        'notification' : ['<div id="{{id}}" class="alert alert-{{type}}" role="alert" style="margin-bottom:2px;overflow-wrap:anywhere;" >',
                            '{{text}}',
                        '</div>'],
        // used on contacts page, searching profiles and selected profile to use
        'profile-list' : ['<div id="{{uid}}-{{pub_k}}" style="padding-top:2px;cursor:pointer">',
                            '<span style="display:table-cell;width:128px; background-color:#111111;padding-right:10px;" >',
                                // TODO: do something if unable to load pic
                                '{{#picture}}',
                                    '<img src="{{picture}}" loading="lazy" class="profile-pic-small"/>',
                                '{{/picture}}',
                                '{{^picture}}',
                                    '<div class="header-button">',
                                        '<svg class="bi" style="height:100%;width:100%;">',
                                            '<use xlink:href="/bootstrap_icons/bootstrap-icons.svg#person-circle"/>',
                                        '</svg>',
                                    '</div>',
                                '{{/picture}}',
                            '</span>',
                            '<span style="width:100%; display:table-cell;word-break: break-all;vertical-align:top; background-color:#221124" >',
                            '{{#profile_name}}',
                                '[{{profile_name}}]<br>',
                            '{{/profile_name}}',
                            '{{#name}}',
                                '{{name}}@',
                            '{{/name}}',
                            '{{#short_pub_k}}',
                                '<span class="pubkey-text">{{short_pub_k}}</span><br>',
                            '{{/short_pub_k}}',
                            '{{#about}}',
                                '<div>',
                                    '{{{about}}}',
                                '</div>',
                            '{{/about}}',
                            '</span>',
                        '</div>'
                        ],
        // event templates
        'event-profile' : [
            // publishers profile pic
            '<span style="height:60px;width:120px; word-break: break-all; display:table-cell; background-color:#111111;padding-right:10px;" >',
                // TODO: do something if unable to load pic
                '{{#picture}}',
                    '<img id="{{uid}}-{{event_id}}-pp" src="{{picture}}" class="profile-pic-small" />',
                '{{/picture}}',
            '</span>',
        ],
        'event-content' : [
            '<span id="{{uid}}-{{event_id}}-content" class="post-content" >',
                '<div border-bottom: 1px solid #443325;">',
                    '<span id="{{uid}}-{{event_id}}-pt" >',
                        '{{#name}}',
                            '<span style="font-weight:bold">{{name}}</span>@<span style="color:cyan">{{short_key}}</span>',
                        '{{/name}}',
                        '{{^name}}',
                            '<span style="color:cyan;font-weight:bold">{{short_key}}</span>',
                        '{{/name}}',
                    '</span>',
                    '<span id="{{uid}}-{{event_id}}-time" style="float:right">{{at_time}}</span>',
                '</div>',
                '{{{content}}}',
                '{{> actions}}',
            '</span>'
        ],
        'event-actions' : [
            '<div style="width:100%">',
                '<span>&nbsp;</span>',
                '<span style="float:right" >',
                    '<svg id="{{uid}}-{{event_id}}-reply" class="bi" >',
                        '<use xlink:href="/bootstrap_icons/bootstrap-icons.svg#chat-right-fill"/>',
                    '</svg>',
                    '<svg id="{{uid}}-{{event_id}}-expand" class="bi" >',
                        '<use xlink:href="/bootstrap_icons/bootstrap-icons.svg#three-dots-vertical"/>',
                    '</svg>',
                '</span>',
                '<div style="border:1px dashed gray;display:none" id="{{uid}}-{{event_id}}-expandcon" style="display:none">event detail...</div>',
            '</div>'
        ],
        // attempts to give some visual info about linkage of this event to others if any...
        'event-path' : [
            '{{#is_parent}}',
                '<div style="height:60px;min-width:10px;border-left: 2px dashed white; border-bottom: 2px dashed white;display:table-cell;background-color:#441124;" >',
                '</div>',
            '{{/is_parent}}',
            '{{#missing_parent}}',
                '<div style="height:60px;min-width:10px;border-right: 2px dashed white; border-top: 2px dashed white;display:table-cell;background-color:#221124;" >',
                '</div>',
            '{{/missing_parent}}',
            '{{^missing_parent}}',
                '{{#is_child}}',
                    '<div style="height:60px;min-width:10px;border-right:2px dashed white;background-color:#221124;display:table-cell;" >',
                    '</div>',
                '{{/is_child}}',
            '{{/missing_parent}}'
        ],
        // main event view
        'event' : [
            '<div id="{{uid}}-{{event_id}}" style="padding-top:2px;border 1px solid #222222">',
                '{{> profile}}',
                '{{> path}}',
                // the note content
                '{{> content}}',
            '</div>'
        ]

    };

    return {
        'get' : function(name){
            let ret = _lookup[name];
            if(ret===undefined){
                ret = '?unknown template '+name+'?';
            }else if(typeof(ret)!=='string'){
                // doubt it makes much difference but only joined once
                // and we do the preparse here too
                ret = _lookup[name] = ret.join('');
                Mustache.parse(ret);
            }
            return ret;
        }
    }
}();
