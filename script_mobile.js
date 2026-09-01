(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this, !![]), e['call'](this);
                };
            m['bind']('begin', n, this, !![]);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"children":["this.MainViewer_mobile","this.IconButton_4574767D_4BB6_8C3A_41C1_BDB6B0F5386A_mobile"],"width":"100%","xrPanelsEnabled":true,"buttonToggleFullscreen":["this.IconButton_4574767D_4BB6_8C3A_41C1_BDB6B0F5386A_mobile"],"propagateClick":false,"start":"this.init(); if(!this.get('fullscreenAvailable')) { [this.IconButton_4574767D_4BB6_8C3A_41C1_BDB6B0F5386A_mobile].forEach(function(component) { if(component.get('class') != 'ViewerArea') component.set('visible', false); }) }","id":"rootPlayer","data":{"locales":{"en":"locale/en.txt"},"history":{},"defaultLocale":"en","name":"Player741","displayTooltipInTouchScreens":true,"textToSpeechConfig":{"pitch":1,"volume":1,"speechOnQuizQuestion":false,"rate":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"speechOnTooltip":false}},"backgroundColor":["#FFFFFF"],"watermark":false,"layout":"absolute","backgroundColorRatios":[0],"defaultMenu":["fullscreen","mute","rotation"],"scripts":{"startMeasurement":TDV.Tour.Script.startMeasurement,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"clone":TDV.Tour.Script.clone,"getOverlays":TDV.Tour.Script.getOverlays,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"resumePlayers":TDV.Tour.Script.resumePlayers,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getMainViewer":TDV.Tour.Script.getMainViewer,"openLink":TDV.Tour.Script.openLink,"setValue":TDV.Tour.Script.setValue,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getKey":TDV.Tour.Script.getKey,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getPixels":TDV.Tour.Script.getPixels,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setMapLocation":TDV.Tour.Script.setMapLocation,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getComponentByName":TDV.Tour.Script.getComponentByName,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"unloadViewer":TDV.Tour.Script.unloadViewer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"init":TDV.Tour.Script.init,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"historyGoBack":TDV.Tour.Script.historyGoBack,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"historyGoForward":TDV.Tour.Script.historyGoForward,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"disableVR":TDV.Tour.Script.disableVR,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"enableVR":TDV.Tour.Script.enableVR,"cloneBindings":TDV.Tour.Script.cloneBindings,"initAnalytics":TDV.Tour.Script.initAnalytics,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"initQuiz":TDV.Tour.Script.initQuiz,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"registerKey":TDV.Tour.Script.registerKey,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"mixObject":TDV.Tour.Script.mixObject,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"toggleVR":TDV.Tour.Script.toggleVR,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"downloadFile":TDV.Tour.Script.downloadFile,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"quizShowScore":TDV.Tour.Script.quizShowScore,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"isPanorama":TDV.Tour.Script.isPanorama,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"executeJS":TDV.Tour.Script.executeJS,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"createTween":TDV.Tour.Script.createTween,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"unregisterKey":TDV.Tour.Script.unregisterKey,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"quizStart":TDV.Tour.Script.quizStart,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"quizFinish":TDV.Tour.Script.quizFinish,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"existsKey":TDV.Tour.Script.existsKey,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"shareSocial":TDV.Tour.Script.shareSocial,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"showPopupImage":TDV.Tour.Script.showPopupImage,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"playAudioList":TDV.Tour.Script.playAudioList,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getMediaByName":TDV.Tour.Script.getMediaByName,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"textToSpeech":TDV.Tour.Script.textToSpeech,"showWindow":TDV.Tour.Script.showWindow,"translate":TDV.Tour.Script.translate,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"setLocale":TDV.Tour.Script.setLocale,"showWindowBase":TDV.Tour.Script.showWindowBase,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound},"gap":10,"minHeight":0,"minWidth":0,"scrollBarMargin":2,"scrollBarColor":"#000000","class":"Player","height":"100%","hash": "cc3d17acde4bb320c747c61548bdab4121e05265a25a68396ee5d6c076613325", "definitions": [{"thumbnailUrl":"media/panorama_47232907_4BAF_85D6_41CB_717A452393C5_t.webp","hfovMax":130,"frames":[{"cube":{"class":"ImageResource","levels":[{"rowCount":8,"height":4096,"url":"media/panorama_47232907_4BAF_85D6_41CB_717A452393C5_0/{face}/0/{row}_{column}.webp","tags":"ondemand","width":24576,"class":"TiledImageResourceLevel","colCount":48},{"rowCount":4,"height":2048,"url":"media/panorama_47232907_4BAF_85D6_41CB_717A452393C5_0/{face}/1/{row}_{column}.webp","tags":"ondemand","width":12288,"class":"TiledImageResourceLevel","colCount":24},{"rowCount":2,"height":1024,"url":"media/panorama_47232907_4BAF_85D6_41CB_717A452393C5_0/{face}/2/{row}_{column}.webp","tags":"ondemand","width":6144,"class":"TiledImageResourceLevel","colCount":12},{"rowCount":1,"height":512,"url":"media/panorama_47232907_4BAF_85D6_41CB_717A452393C5_0/{face}/3/{row}_{column}.webp","tags":["ondemand","preload"],"width":3072,"class":"TiledImageResourceLevel","colCount":6}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_47232907_4BAF_85D6_41CB_717A452393C5_t.webp"}],"class":"Panorama","id":"panorama_47232907_4BAF_85D6_41CB_717A452393C5","hfov":360,"vfov":180,"data":{"label":"taxi-vr"},"label":trans('panorama_47232907_4BAF_85D6_41CB_717A452393C5.label')},{"toolTipPaddingLeft":3,"toolTipShadowColor":"#333333","horizontalAlign":"center","mode":"toggle","propagateClick":false,"toolTipBorderRadius":1,"iconURL":"skin/IconButton_4574767D_4BB6_8C3A_41C1_BDB6B0F5386A.png","id":"IconButton_4574767D_4BB6_8C3A_41C1_BDB6B0F5386A_mobile","toolTipBorderColor":"#767676","data":{"name":"IconButton1493"},"toolTipShadowBlurRadius":1,"tabIndex":0,"toolTipTextShadowBlurRadius":1,"right":"8.55%","maxHeight":64,"maxWidth":64,"toolTipBackgroundColor":"#F6F6F6","toolTipTextShadowColor":"#000000","verticalAlign":"middle","minHeight":1,"minWidth":1,"top":"6.42%","class":"IconButton","height":37.5,"toolTipFontColor":"#606060","width":46.73,"transparencyActive":true,"backgroundOpacity":0,"toolTip":trans('IconButton_4574767D_4BB6_8C3A_41C1_BDB6B0F5386A_mobile.toolTip'),"toolTipFontSize":6,"toolTipPaddingRight":3,"toolTipFontFamily":"Arial"},{"toolTipPaddingLeft":3,"playbackBarHeadShadowHorizontalLength":0,"propagateClick":false,"toolTipFontSize":"1.11vmin","playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBorderRadius":0,"toolTipPaddingRight":3,"playbackBarHeadShadowOpacity":0.7,"width":"100%","subtitlesFontSize":"3vmin","subtitlesBackgroundOpacity":0.2,"subtitlesBorderColor":"#FFFFFF","vrPointerColor":"#FFFFFF","data":{"name":"Main Viewer"},"playbackBarProgressBackgroundColorRatios":[0],"progressBackgroundColorRatios":[0],"progressOpacity":0.7,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadShadowVerticalLength":0,"toolTipBackgroundColor":"#F6F6F6","progressBarBackgroundColorDirection":"horizontal","progressBarBorderColor":"#000000","playbackBarProgressBorderColor":"#000000","progressRight":"33%","playbackBarBorderRadius":0,"progressBarBackgroundColorRatios":[0],"subtitlesFontFamily":"Arial","subtitlesTextShadowVerticalLength":1,"playbackBarHeadBorderRadius":0,"class":"ViewerArea","toolTipFontColor":"#606060","progressBarBackgroundColor":["#3399FF"],"subtitlesGap":0,"progressBorderColor":"#000000","playbackBarBorderSize":0,"progressBackgroundColor":["#000000"],"playbackBarHeadBorderColor":"#000000","surfaceReticleColor":"#FFFFFF","progressBottom":10,"subtitlesBackgroundColor":"#000000","toolTipShadowColor":"#333138","playbackBarBackgroundOpacity":1,"firstTransitionDuration":0,"toolTipBorderRadius":1,"progressBorderSize":0,"progressHeight":2,"progressBarBorderRadius":2,"playbackBarLeft":0,"surfaceReticleSelectionColor":"#FFFFFF","progressBarBorderSize":0,"id":"MainViewer_mobile","toolTipFontFamily":"Arial","playbackBarHeadHeight":15,"toolTipBorderColor":"#767676","playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"playbackBarHeadShadow":true,"subtitlesTextShadowOpacity":1,"toolTipShadowBlurRadius":1,"playbackBarHeadShadowBlurRadius":1.5,"toolTipTextShadowBlurRadius":1,"vrPointerSelectionColor":"#FF6600","playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesFontColor":"#FFFFFF","progressBorderRadius":2,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesTop":0,"progressLeft":"33%","toolTipTextShadowColor":"#000000","subtitlesTextShadowColor":"#000000","minHeight":25,"vrThumbstickRotationStep":20,"minWidth":50,"vrPointerSelectionTime":2000,"playbackBarBottom":5,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeight":10,"playbackBarBackgroundColor":["#FFFFFF"],"height":"100%","playbackBarHeadWidth":6,"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderSize":0,"playbackBarRight":0,"subtitlesBottom":50},{"arrowKeysAction":"translate","mouseControlMode":"drag_rotation","aaEnabled":true,"touchControlMode":"drag_rotation","viewerArea":"this.MainViewer_mobile","keepModel3DLoadedWithoutLocation":true,"class":"PanoramaPlayer","id":"MainViewer_mobilePanoramaPlayer","displayPlaybackBar":true},{"id":"mainPlayList","items":[{"camera":"this.panorama_47232907_4BAF_85D6_41CB_717A452393C5_camera","media":"this.panorama_47232907_4BAF_85D6_41CB_717A452393C5","end":"this.trigger('tourEnded')","player":"this.MainViewer_mobilePanoramaPlayer","class":"PanoramaPlayListItem"}],"class":"PlayList"},{"enterPointingToHorizon":true,"class":"PanoramaCamera","initialSequence":"this.sequence_40997073_4BAF_844E_4195_5311E809C8B4","id":"panorama_47232907_4BAF_85D6_41CB_717A452393C5_camera","initialPosition":{"pitch":-23.05,"hfov":120,"yaw":0.55,"class":"PanoramaCameraPosition"},"idleSequence":"this.sequence_40997073_4BAF_844E_4195_5311E809C8B4"},{"class":"PanoramaCameraSequence","id":"sequence_40997073_4BAF_844E_4195_5311E809C8B4","movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]}]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.1.0, Fri Jul 10 2026