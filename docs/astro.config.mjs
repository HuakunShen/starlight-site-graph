import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSiteGraph from 'starlight-site-graph';
import svelte from '@astrojs/svelte';

export default defineConfig({
	redirects: {
		'/': '/intro',
	},
	integrations: [
		svelte(),
		starlight({
			title: 'Starlight Site Graph',
			credits: true,
			sidebar: [
				{
					label: 'Start Here',
					autogenerate: { directory: 'intro' },
				},
				{
					label: 'Configuration',
					autogenerate: { directory: 'configuration' },
				},
			],
			social: {
				github: 'https://github.com/fevol/starlight-site-graph',
			},
			editLink: {
				baseUrl: 'https://github.com/fevol/starlight-site-graph/edit/main/docs/',
			},
			plugins: [
				starlightSiteGraph({
					graphConfig: {
						depth: 8,
						renderArrows: true,
					},
					sitemap: {
						"api/namespaces/augmentations/interfaces/editablefileview/": {
							"title": "EditableFileView",
							"content": "",
							"links": [
								"api/namespaces/augmentations/interfaces/fileview/",
								"api/namespaces/augmentations/interfaces/textfileview/"
							],
							"backlinks": [
								"api/namespaces/augmentations/interfaces/fileview/",
								"api/namespaces/augmentations/interfaces/textfileview/"
							],
							"tags": []
						},
						"api/namespaces/augmentations/interfaces/fileview/": {
							"title": "FileView",
							"content": "",
							"links": [
								"api/namespaces/augmentations/interfaces/itemview/",
								"api/namespaces/augmentations/interfaces/editablefileview/"
							],
							"backlinks": [
								"api/namespaces/augmentations/interfaces/editablefileview/",
								"api/namespaces/augmentations/interfaces/itemview/"
							],
							"tags": []
						},
						"api/namespaces/augmentations/interfaces/textfileview/": {
							"title": "TextFileView",
							"content": "",
							"links": [
								"api/namespaces/augmentations/interfaces/editablefileview/",
								"api/namespaces/augmentations/interfaces/markdownview/"
							],
							"backlinks": [
								"api/namespaces/augmentations/interfaces/editablefileview/",
								"api/namespaces/augmentations/interfaces/markdownview/"
							],
							"tags": []
						},
						"api/namespaces/augmentations/interfaces/itemview/": {
							"title": "ItemView",
							"content": "",
							"links": [
								"api/namespaces/augmentations/interfaces/view/",
								"api/namespaces/augmentations/interfaces/fileview/"
							],
							"backlinks": [
								"api/namespaces/augmentations/interfaces/fileview/",
								"api/namespaces/augmentations/interfaces/view/"
							],
							"tags": []
						},
						"api/namespaces/augmentations/interfaces/view/": {
							"title": "View",
							"content": "",
							"links": [
								"api/namespaces/augmentations/interfaces/itemview/"
							],
							"backlinks": [
								"api/namespaces/augmentations/interfaces/itemview/"
							],
							"tags": []
						},
						"api/namespaces/augmentations/interfaces/markdownview/": {
							"title": "MarkdownView",
							"content": "",
							"links": [
								"api/namespaces/augmentations/interfaces/textfileview/",
								"api/namespaces/internals/interfaces/metadataeditor/",
								"api/namespaces/internals/interfaces/token/"
							],
							"backlinks": [
								"api/namespaces/augmentations/interfaces/textfileview/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/metadataeditor/": {
							"title": "MetadataEditor",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/internals/interfaces/metadataeditorproperty/",
								"api/namespaces/obsidian/classes/hoverpopover/",
								"api/namespaces/obsidian/classes/markdownview/",
								"api/namespaces/internals/interfaces/propertyentrydata/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/"
							],
							"backlinks": [
								"api/namespaces/augmentations/interfaces/markdownview/",
								"api/namespaces/internals/interfaces/metadataeditorproperty/",
								"api/namespaces/internals/interfaces/propertyrendercontext/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/classes/markdownview/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/token/": {
							"title": "Token",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/editorrange/",
								"api/namespaces/obsidian/interfaces/editorposition/"
							],
							"backlinks": [
								"api/namespaces/augmentations/interfaces/markdownview/",
								"api/namespaces/internals/interfaces/iframedmarkdowneditor/",
								"api/namespaces/internals/interfaces/markdownbaseview/",
								"api/namespaces/internals/interfaces/markdownscrollableeditview/",
								"api/namespaces/internals/interfaces/tablecelleditor/",
								"api/namespaces/obsidian/classes/markdowneditview/",
								"api/namespaces/obsidian/classes/markdownview/",
								"api/namespaces/obsidian/interfaces/editorrange/"
							],
							"tags": []
						},
						"api/namespaces/canvas/interfaces/canvasdata/": {
							"title": "CanvasData",
							"content": "",
							"links": [
								"api/namespaces/canvas/interfaces/canvasedgedata/",
								"api/namespaces/canvas/type-aliases/allcanvasnodedata/"
							],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/canvas/interfaces/canvasedgedata/": {
							"title": "CanvasEdgeData",
							"content": "",
							"links": [
								"api/namespaces/canvas/type-aliases/edgeend/",
								"api/namespaces/canvas/type-aliases/nodeside/"
							],
							"backlinks": [
								"api/namespaces/canvas/interfaces/canvasdata/"
							],
							"tags": []
						},
						"api/namespaces/canvas/type-aliases/allcanvasnodedata/": {
							"title": "AllCanvasNodeData",
							"content": "",
							"links": [
								"api/namespaces/canvas/interfaces/canvasfiledata/",
								"api/namespaces/canvas/interfaces/canvastextdata/",
								"api/namespaces/canvas/interfaces/canvaslinkdata/",
								"api/namespaces/canvas/interfaces/canvasgroupdata/"
							],
							"backlinks": [
								"api/namespaces/canvas/interfaces/canvasdata/"
							],
							"tags": []
						},
						"api/namespaces/canvas/type-aliases/edgeend/": {
							"title": "EdgeEnd",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/canvas/interfaces/canvasedgedata/"
							],
							"tags": []
						},
						"api/namespaces/canvas/type-aliases/nodeside/": {
							"title": "NodeSide",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/canvas/interfaces/canvasedgedata/"
							],
							"tags": []
						},
						"api/namespaces/canvas/interfaces/canvasfiledata/": {
							"title": "CanvasFileData",
							"content": "",
							"links": [
								"api/namespaces/canvas/interfaces/canvasnodedata/"
							],
							"backlinks": [
								"api/namespaces/canvas/interfaces/canvasnodedata/",
								"api/namespaces/canvas/type-aliases/allcanvasnodedata/"
							],
							"tags": []
						},
						"api/namespaces/canvas/interfaces/canvasnodedata/": {
							"title": "CanvasNodeData",
							"content": "",
							"links": [
								"api/namespaces/canvas/interfaces/canvasfiledata/",
								"api/namespaces/canvas/interfaces/canvastextdata/",
								"api/namespaces/canvas/interfaces/canvaslinkdata/",
								"api/namespaces/canvas/interfaces/canvasgroupdata/"
							],
							"backlinks": [
								"api/namespaces/canvas/interfaces/canvasfiledata/",
								"api/namespaces/canvas/interfaces/canvasgroupdata/",
								"api/namespaces/canvas/interfaces/canvaslinkdata/",
								"api/namespaces/canvas/interfaces/canvastextdata/"
							],
							"tags": []
						},
						"api/namespaces/canvas/interfaces/canvasgroupdata/": {
							"title": "CanvasGroupData",
							"content": "",
							"links": [
								"api/namespaces/canvas/interfaces/canvasnodedata/",
								"api/namespaces/canvas/type-aliases/backgroundstyle/"
							],
							"backlinks": [
								"api/namespaces/canvas/interfaces/canvasnodedata/",
								"api/namespaces/canvas/type-aliases/allcanvasnodedata/"
							],
							"tags": []
						},
						"api/namespaces/canvas/type-aliases/backgroundstyle/": {
							"title": "BackgroundStyle",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/canvas/interfaces/canvasgroupdata/"
							],
							"tags": []
						},
						"api/namespaces/canvas/interfaces/canvaslinkdata/": {
							"title": "CanvasLinkData",
							"content": "",
							"links": [
								"api/namespaces/canvas/interfaces/canvasnodedata/"
							],
							"backlinks": [
								"api/namespaces/canvas/interfaces/canvasnodedata/",
								"api/namespaces/canvas/type-aliases/allcanvasnodedata/"
							],
							"tags": []
						},
						"api/namespaces/canvas/interfaces/canvastextdata/": {
							"title": "CanvasTextData",
							"content": "",
							"links": [
								"api/namespaces/canvas/interfaces/canvasnodedata/"
							],
							"backlinks": [
								"api/namespaces/canvas/interfaces/canvasnodedata/",
								"api/namespaces/canvas/type-aliases/allcanvasnodedata/"
							],
							"tags": []
						},
						"api/namespaces/canvas/type-aliases/canvascolor/": {
							"title": "CanvasColor",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/codemirrorview/interfaces/editorview/": {
							"title": "EditorView",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/global/interfaces/domelementinfo/": {
							"title": "DomElementInfo",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/internals/interfaces/abstractsearchcomponent/": {
							"title": "AbstractSearchComponent",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/editorsearchcomponent/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/scope/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/editorsearchcomponent/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/editorsearchcomponent/": {
							"title": "EditorSearchComponent",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/abstractsearchcomponent/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/internals/interfaces/searchcursor/",
								"api/namespaces/obsidian/classes/editor/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/obsidian/interfaces/editorrange/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/abstractsearchcomponent/",
								"api/namespaces/internals/interfaces/iframedmarkdowneditor/",
								"api/namespaces/internals/interfaces/markdownscrollableeditview/",
								"api/namespaces/obsidian/classes/markdowneditview/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/app/": {
							"title": "App",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/account/",
								"api/namespaces/internals/interfaces/commands/",
								"api/namespaces/internals/interfaces/customcss/",
								"api/namespaces/internals/interfaces/obsidiandom/",
								"api/namespaces/internals/interfaces/embedregistry/",
								"api/namespaces/obsidian/classes/filemanager/",
								"api/namespaces/internals/interfaces/hotkeymanager/",
								"api/namespaces/internals/interfaces/internalplugins/",
								"api/namespaces/obsidian/classes/keymap/",
								"api/namespaces/obsidian/type-aliases/userevent/",
								"api/namespaces/internals/interfaces/loadprogress/",
								"api/namespaces/obsidian/classes/metadatacache/",
								"api/namespaces/internals/interfaces/metadatatypemanager/",
								"api/namespaces/internals/interfaces/plugins/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/obsidian/classes/setting/",
								"api/namespaces/obsidian/classes/vault/",
								"api/namespaces/internals/interfaces/viewregistry/",
								"api/namespaces/obsidian/classes/workspace/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/internals/interfaces/importedattachments/",
								"api/namespaces/obsidian/classes/tfolder/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/abstractsearchcomponent/",
								"api/namespaces/internals/interfaces/allpropertiesview/",
								"api/namespaces/internals/interfaces/audioview/",
								"api/namespaces/internals/interfaces/backlinkview/",
								"api/namespaces/internals/interfaces/bookmarksview/",
								"api/namespaces/internals/interfaces/browserhistoryview/",
								"api/namespaces/internals/interfaces/browserview/",
								"api/namespaces/internals/interfaces/canvaslinkupdater/",
								"api/namespaces/internals/interfaces/canvasview/",
								"api/namespaces/internals/interfaces/clipboardmanager/",
								"api/namespaces/internals/interfaces/commands/",
								"api/namespaces/internals/interfaces/customcss/",
								"api/namespaces/internals/interfaces/dragmanager/",
								"api/namespaces/internals/interfaces/editorsearchcomponent/",
								"api/namespaces/internals/interfaces/embedcontext/",
								"api/namespaces/internals/interfaces/embeddededitorview/",
								"api/namespaces/internals/interfaces/emptyview/",
								"api/namespaces/internals/interfaces/fileexplorerview/",
								"api/namespaces/internals/interfaces/filepropertiesview/",
								"api/namespaces/internals/interfaces/filesuggest/",
								"api/namespaces/internals/interfaces/filesuggestmanager/",
								"api/namespaces/internals/interfaces/graphview/",
								"api/namespaces/internals/interfaces/hotkeymanager/",
								"api/namespaces/internals/interfaces/hotkeyssettingtab/",
								"api/namespaces/internals/interfaces/iframedmarkdowneditor/",
								"api/namespaces/internals/interfaces/imageview/",
								"api/namespaces/internals/interfaces/infofileview/",
								"api/namespaces/internals/interfaces/internalplugins/",
								"api/namespaces/internals/interfaces/linkupdate/",
								"api/namespaces/internals/interfaces/localgraphview/",
								"api/namespaces/internals/interfaces/markdownbaseview/",
								"api/namespaces/internals/interfaces/markdownscrollableeditview/",
								"api/namespaces/internals/interfaces/metadataeditor/",
								"api/namespaces/internals/interfaces/metadataeditorproperty/",
								"api/namespaces/internals/interfaces/metadatatypemanager/",
								"api/namespaces/internals/interfaces/outgoinglinkview/",
								"api/namespaces/internals/interfaces/outlineview/",
								"api/namespaces/internals/interfaces/pdfview/",
								"api/namespaces/internals/interfaces/plugins/",
								"api/namespaces/internals/interfaces/propertyrendercontext/",
								"api/namespaces/internals/interfaces/releasenotesview/",
								"api/namespaces/internals/interfaces/searchview/",
								"api/namespaces/internals/interfaces/tablecelleditor/",
								"api/namespaces/internals/interfaces/tagview/",
								"api/namespaces/internals/interfaces/tree/",
								"api/namespaces/internals/interfaces/unknownview/",
								"api/namespaces/internals/interfaces/videoview/",
								"api/namespaces/internals/interfaces/widgeteditorview/",
								"api/namespaces/obsidian/classes/abstractinputsuggest/",
								"api/namespaces/obsidian/classes/editablefileview/",
								"api/namespaces/obsidian/classes/editorsuggest/",
								"api/namespaces/obsidian/classes/filemanager/",
								"api/namespaces/obsidian/classes/fileview/",
								"api/namespaces/obsidian/classes/fuzzysuggestmodal/",
								"api/namespaces/obsidian/classes/itemview/",
								"api/namespaces/obsidian/classes/markdowneditview/",
								"api/namespaces/obsidian/classes/markdownpreviewview/",
								"api/namespaces/obsidian/classes/markdownrenderer/",
								"api/namespaces/obsidian/classes/markdownview/",
								"api/namespaces/obsidian/classes/metadatacache/",
								"api/namespaces/obsidian/classes/modal/",
								"api/namespaces/obsidian/classes/plugin/",
								"api/namespaces/obsidian/classes/pluginsettingtab/",
								"api/namespaces/obsidian/classes/popoversuggest/",
								"api/namespaces/obsidian/classes/setting/",
								"api/namespaces/obsidian/classes/settingtab/",
								"api/namespaces/obsidian/classes/suggestmodal/",
								"api/namespaces/obsidian/classes/textfileview/",
								"api/namespaces/obsidian/classes/view/",
								"api/namespaces/obsidian/classes/workspace/",
								"api/namespaces/obsidian/interfaces/blockcache/",
								"api/namespaces/obsidian/interfaces/markdownfileinfo/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/scope/": {
							"title": "Scope",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/keyscope/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/",
								"api/namespaces/obsidian/type-aliases/modifier/",
								"api/namespaces/obsidian/type-aliases/keymapeventlistener/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/abstractsearchcomponent/",
								"api/namespaces/internals/interfaces/allpropertiesview/",
								"api/namespaces/internals/interfaces/audioview/",
								"api/namespaces/internals/interfaces/backlinkview/",
								"api/namespaces/internals/interfaces/bookmarksview/",
								"api/namespaces/internals/interfaces/browserhistoryview/",
								"api/namespaces/internals/interfaces/browserview/",
								"api/namespaces/internals/interfaces/canvasview/",
								"api/namespaces/internals/interfaces/editorsearchcomponent/",
								"api/namespaces/internals/interfaces/emptyview/",
								"api/namespaces/internals/interfaces/fileexplorerview/",
								"api/namespaces/internals/interfaces/filepropertiesview/",
								"api/namespaces/internals/interfaces/filesuggest/",
								"api/namespaces/internals/interfaces/graphview/",
								"api/namespaces/internals/interfaces/iframedmarkdowneditor/",
								"api/namespaces/internals/interfaces/imageview/",
								"api/namespaces/internals/interfaces/infofileview/",
								"api/namespaces/internals/interfaces/keyscope/",
								"api/namespaces/internals/interfaces/localgraphview/",
								"api/namespaces/internals/interfaces/markdownscrollableeditview/",
								"api/namespaces/internals/interfaces/outgoinglinkview/",
								"api/namespaces/internals/interfaces/outlineview/",
								"api/namespaces/internals/interfaces/pdfview/",
								"api/namespaces/internals/interfaces/releasenotesview/",
								"api/namespaces/internals/interfaces/searchview/",
								"api/namespaces/internals/interfaces/tagview/",
								"api/namespaces/internals/interfaces/tree/",
								"api/namespaces/internals/interfaces/unknownview/",
								"api/namespaces/internals/interfaces/videoview/",
								"api/namespaces/internals/interfaces/widgeteditorview/",
								"api/namespaces/obsidian/classes/abstractinputsuggest/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/editablefileview/",
								"api/namespaces/obsidian/classes/editorsuggest/",
								"api/namespaces/obsidian/classes/fileview/",
								"api/namespaces/obsidian/classes/fuzzysuggestmodal/",
								"api/namespaces/obsidian/classes/itemview/",
								"api/namespaces/obsidian/classes/keymap/",
								"api/namespaces/obsidian/classes/markdowneditview/",
								"api/namespaces/obsidian/classes/markdownview/",
								"api/namespaces/obsidian/classes/menu/",
								"api/namespaces/obsidian/classes/modal/",
								"api/namespaces/obsidian/classes/popoversuggest/",
								"api/namespaces/obsidian/classes/setting/",
								"api/namespaces/obsidian/classes/suggestmodal/",
								"api/namespaces/obsidian/classes/textfileview/",
								"api/namespaces/obsidian/classes/view/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/account/": {
							"title": "Account",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/classes/app/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/allpropertiesview/": {
							"title": "AllPropertiesView",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/itemview/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/obsidian/classes/menu/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/",
								"api/namespaces/obsidian/interfaces/viewstateresult/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/itemview/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/itemview/": {
							"title": "ItemView",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/view/",
								"api/namespaces/obsidian/classes/fileview/",
								"api/namespaces/internals/interfaces/allpropertiesview/",
								"api/namespaces/internals/interfaces/bookmarksview/",
								"api/namespaces/internals/interfaces/browserhistoryview/",
								"api/namespaces/internals/interfaces/browserview/",
								"api/namespaces/internals/interfaces/emptyview/",
								"api/namespaces/internals/interfaces/graphview/",
								"api/namespaces/internals/interfaces/releasenotesview/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/obsidian/classes/menu/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/",
								"api/namespaces/obsidian/interfaces/viewstateresult/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/allpropertiesview/",
								"api/namespaces/internals/interfaces/bookmarksview/",
								"api/namespaces/internals/interfaces/browserhistoryview/",
								"api/namespaces/internals/interfaces/browserview/",
								"api/namespaces/internals/interfaces/emptyview/",
								"api/namespaces/internals/interfaces/graphview/",
								"api/namespaces/internals/interfaces/releasenotesview/",
								"api/namespaces/obsidian/classes/fileview/",
								"api/namespaces/obsidian/classes/view/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/component/": {
							"title": "Component",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/hoverpopover/",
								"api/namespaces/obsidian/interfaces/markdownpreviewevents/",
								"api/namespaces/obsidian/classes/markdownrenderchild/",
								"api/namespaces/obsidian/classes/menu/",
								"api/namespaces/obsidian/classes/plugin/",
								"api/namespaces/obsidian/classes/view/",
								"api/namespaces/internals/interfaces/embeddededitorview/",
								"api/namespaces/internals/interfaces/markdownbaseview/",
								"api/namespaces/internals/interfaces/metadataeditor/",
								"api/namespaces/internals/interfaces/metadataeditorproperty/",
								"api/namespaces/internals/interfaces/customcss/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/allpropertiesview/",
								"api/namespaces/internals/interfaces/audioview/",
								"api/namespaces/internals/interfaces/backlinkview/",
								"api/namespaces/internals/interfaces/bookmarksview/",
								"api/namespaces/internals/interfaces/browserhistoryview/",
								"api/namespaces/internals/interfaces/browserview/",
								"api/namespaces/internals/interfaces/canvasview/",
								"api/namespaces/internals/interfaces/customcss/",
								"api/namespaces/internals/interfaces/embeddededitorview/",
								"api/namespaces/internals/interfaces/emptyview/",
								"api/namespaces/internals/interfaces/fileexplorerview/",
								"api/namespaces/internals/interfaces/filepropertiesview/",
								"api/namespaces/internals/interfaces/graphview/",
								"api/namespaces/internals/interfaces/iframedmarkdowneditor/",
								"api/namespaces/internals/interfaces/imageview/",
								"api/namespaces/internals/interfaces/infofileview/",
								"api/namespaces/internals/interfaces/localgraphview/",
								"api/namespaces/internals/interfaces/markdownbaseview/",
								"api/namespaces/internals/interfaces/markdownscrollableeditview/",
								"api/namespaces/internals/interfaces/metadataeditor/",
								"api/namespaces/internals/interfaces/metadataeditorproperty/",
								"api/namespaces/internals/interfaces/outgoinglinkview/",
								"api/namespaces/internals/interfaces/outlineview/",
								"api/namespaces/internals/interfaces/pdfview/",
								"api/namespaces/internals/interfaces/propertywidget/",
								"api/namespaces/internals/interfaces/releasenotesview/",
								"api/namespaces/internals/interfaces/searchview/",
								"api/namespaces/internals/interfaces/tablecelleditor/",
								"api/namespaces/internals/interfaces/tagview/",
								"api/namespaces/internals/interfaces/unknownview/",
								"api/namespaces/internals/interfaces/videoview/",
								"api/namespaces/internals/interfaces/widgeteditorview/",
								"api/namespaces/internals/type-aliases/embeddableconstructor/",
								"api/namespaces/obsidian/classes/editablefileview/",
								"api/namespaces/obsidian/classes/fileview/",
								"api/namespaces/obsidian/classes/hoverpopover/",
								"api/namespaces/obsidian/classes/itemview/",
								"api/namespaces/obsidian/classes/markdowneditview/",
								"api/namespaces/obsidian/classes/markdownpreviewview/",
								"api/namespaces/obsidian/classes/markdownrenderchild/",
								"api/namespaces/obsidian/classes/markdownrenderer/",
								"api/namespaces/obsidian/classes/markdownview/",
								"api/namespaces/obsidian/classes/menu/",
								"api/namespaces/obsidian/classes/plugin/",
								"api/namespaces/obsidian/classes/textfileview/",
								"api/namespaces/obsidian/classes/view/",
								"api/namespaces/obsidian/interfaces/markdownpreviewevents/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/eventref/": {
							"title": "EventRef",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/events/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/allpropertiesview/",
								"api/namespaces/internals/interfaces/audioview/",
								"api/namespaces/internals/interfaces/backlinkview/",
								"api/namespaces/internals/interfaces/bookmarksview/",
								"api/namespaces/internals/interfaces/browserhistoryview/",
								"api/namespaces/internals/interfaces/browserview/",
								"api/namespaces/internals/interfaces/canvasleaf/",
								"api/namespaces/internals/interfaces/canvasview/",
								"api/namespaces/internals/interfaces/customcss/",
								"api/namespaces/internals/interfaces/embeddededitorview/",
								"api/namespaces/internals/interfaces/embedregistry/",
								"api/namespaces/internals/interfaces/emptyview/",
								"api/namespaces/internals/interfaces/fileexplorerleaf/",
								"api/namespaces/internals/interfaces/fileexplorerview/",
								"api/namespaces/internals/interfaces/filepropertiesview/",
								"api/namespaces/internals/interfaces/globalsearchleaf/",
								"api/namespaces/internals/interfaces/graphview/",
								"api/namespaces/internals/interfaces/iframedmarkdowneditor/",
								"api/namespaces/internals/interfaces/imageview/",
								"api/namespaces/internals/interfaces/infofileview/",
								"api/namespaces/internals/interfaces/internalplugins/",
								"api/namespaces/internals/interfaces/localgraphview/",
								"api/namespaces/internals/interfaces/markdownbaseview/",
								"api/namespaces/internals/interfaces/markdownscrollableeditview/",
								"api/namespaces/internals/interfaces/metadataeditor/",
								"api/namespaces/internals/interfaces/metadataeditorproperty/",
								"api/namespaces/internals/interfaces/metadatatypemanager/",
								"api/namespaces/internals/interfaces/outgoinglinkview/",
								"api/namespaces/internals/interfaces/outlineview/",
								"api/namespaces/internals/interfaces/pdfview/",
								"api/namespaces/internals/interfaces/releasenotesview/",
								"api/namespaces/internals/interfaces/searchview/",
								"api/namespaces/internals/interfaces/tablecelleditor/",
								"api/namespaces/internals/interfaces/tagview/",
								"api/namespaces/internals/interfaces/unknownview/",
								"api/namespaces/internals/interfaces/videoview/",
								"api/namespaces/internals/interfaces/viewregistry/",
								"api/namespaces/internals/interfaces/widgeteditorview/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/classes/editablefileview/",
								"api/namespaces/obsidian/classes/events/",
								"api/namespaces/obsidian/classes/fileview/",
								"api/namespaces/obsidian/classes/hoverpopover/",
								"api/namespaces/obsidian/classes/itemview/",
								"api/namespaces/obsidian/classes/markdowneditview/",
								"api/namespaces/obsidian/classes/markdownpreviewview/",
								"api/namespaces/obsidian/classes/markdownrenderchild/",
								"api/namespaces/obsidian/classes/markdownrenderer/",
								"api/namespaces/obsidian/classes/markdownview/",
								"api/namespaces/obsidian/classes/menu/",
								"api/namespaces/obsidian/classes/metadatacache/",
								"api/namespaces/obsidian/classes/plugin/",
								"api/namespaces/obsidian/classes/textfileview/",
								"api/namespaces/obsidian/classes/vault/",
								"api/namespaces/obsidian/classes/view/",
								"api/namespaces/obsidian/classes/workspace/",
								"api/namespaces/obsidian/classes/workspacecontainer/",
								"api/namespaces/obsidian/classes/workspacefloating/",
								"api/namespaces/obsidian/classes/workspaceitem/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/workspacemobiledrawer/",
								"api/namespaces/obsidian/classes/workspaceparent/",
								"api/namespaces/obsidian/classes/workspaceroot/",
								"api/namespaces/obsidian/classes/workspacesidedock/",
								"api/namespaces/obsidian/classes/workspacesplit/",
								"api/namespaces/obsidian/classes/workspacetabs/",
								"api/namespaces/obsidian/classes/workspacewindow/",
								"api/namespaces/obsidian/interfaces/markdownpreviewevents/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/workspaceleaf/": {
							"title": "WorkspaceLeaf",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/workspaceitem/",
								"api/namespaces/internals/interfaces/canvasleaf/",
								"api/namespaces/internals/interfaces/fileexplorerleaf/",
								"api/namespaces/internals/interfaces/globalsearchleaf/",
								"api/namespaces/obsidian/classes/workspacemobiledrawer/",
								"api/namespaces/obsidian/classes/workspacetabs/",
								"api/namespaces/obsidian/classes/view/",
								"api/namespaces/obsidian/classes/workspacecontainer/",
								"api\\namespaces\\obsidian\\classes\\workspaceroot/",
								"api\\namespaces\\obsidian\\classes\\workspacewindow/",
								"api/namespaces/obsidian/interfaces/viewstate/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/obsidian/interfaces/openviewstate/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/allpropertiesview/",
								"api/namespaces/internals/interfaces/audioview/",
								"api/namespaces/internals/interfaces/backlinkview/",
								"api/namespaces/internals/interfaces/bookmarksview/",
								"api/namespaces/internals/interfaces/browserhistoryview/",
								"api/namespaces/internals/interfaces/browserview/",
								"api/namespaces/internals/interfaces/canvasleaf/",
								"api/namespaces/internals/interfaces/canvasview/",
								"api/namespaces/internals/interfaces/emptyview/",
								"api/namespaces/internals/interfaces/fileexplorerleaf/",
								"api/namespaces/internals/interfaces/fileexplorerview/",
								"api/namespaces/internals/interfaces/filepropertiesview/",
								"api/namespaces/internals/interfaces/globalsearchleaf/",
								"api/namespaces/internals/interfaces/graphview/",
								"api/namespaces/internals/interfaces/hoverlinkevent/",
								"api/namespaces/internals/interfaces/imageview/",
								"api/namespaces/internals/interfaces/infofileview/",
								"api/namespaces/internals/interfaces/localgraphview/",
								"api/namespaces/internals/interfaces/outgoinglinkview/",
								"api/namespaces/internals/interfaces/outlineview/",
								"api/namespaces/internals/interfaces/pdfview/",
								"api/namespaces/internals/interfaces/releasenotesview/",
								"api/namespaces/internals/interfaces/searchview/",
								"api/namespaces/internals/interfaces/tagview/",
								"api/namespaces/internals/interfaces/unknownview/",
								"api/namespaces/internals/interfaces/videoview/",
								"api/namespaces/internals/interfaces/viewregistry/",
								"api/namespaces/obsidian/classes/editablefileview/",
								"api/namespaces/obsidian/classes/fileview/",
								"api/namespaces/obsidian/classes/itemview/",
								"api/namespaces/obsidian/classes/markdownview/",
								"api/namespaces/obsidian/classes/textfileview/",
								"api/namespaces/obsidian/classes/view/",
								"api/namespaces/obsidian/classes/workspace/",
								"api/namespaces/obsidian/classes/workspaceitem/",
								"api/namespaces/obsidian/interfaces/openviewstate/",
								"api/namespaces/obsidian/interfaces/viewstate/",
								"api/namespaces/obsidian/type-aliases/viewcreator/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/menu/": {
							"title": "Menu",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/closeablecomponent/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/menuitem/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/",
								"api/namespaces/obsidian/interfaces/menupositiondef/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/allpropertiesview/",
								"api/namespaces/internals/interfaces/audioview/",
								"api/namespaces/internals/interfaces/backlinkview/",
								"api/namespaces/internals/interfaces/bookmarksview/",
								"api/namespaces/internals/interfaces/browserhistoryview/",
								"api/namespaces/internals/interfaces/browserview/",
								"api/namespaces/internals/interfaces/canvasview/",
								"api/namespaces/internals/interfaces/emptyview/",
								"api/namespaces/internals/interfaces/fileexplorerview/",
								"api/namespaces/internals/interfaces/filepropertiesview/",
								"api/namespaces/internals/interfaces/graphview/",
								"api/namespaces/internals/interfaces/imageview/",
								"api/namespaces/internals/interfaces/infofileview/",
								"api/namespaces/internals/interfaces/localgraphview/",
								"api/namespaces/internals/interfaces/outgoinglinkview/",
								"api/namespaces/internals/interfaces/outlineview/",
								"api/namespaces/internals/interfaces/pdfview/",
								"api/namespaces/internals/interfaces/releasenotesview/",
								"api/namespaces/internals/interfaces/searchview/",
								"api/namespaces/internals/interfaces/tagview/",
								"api/namespaces/internals/interfaces/unknownview/",
								"api/namespaces/internals/interfaces/videoview/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/classes/editablefileview/",
								"api/namespaces/obsidian/classes/fileview/",
								"api/namespaces/obsidian/classes/itemview/",
								"api/namespaces/obsidian/classes/markdownview/",
								"api/namespaces/obsidian/classes/menuitem/",
								"api/namespaces/obsidian/classes/textfileview/",
								"api/namespaces/obsidian/classes/view/",
								"api/namespaces/obsidian/interfaces/closeablecomponent/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/keymapeventhandler/": {
							"title": "KeymapEventHandler",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/keymapinfo/",
								"api/namespaces/obsidian/classes/scope/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/allpropertiesview/",
								"api/namespaces/internals/interfaces/audioview/",
								"api/namespaces/internals/interfaces/backlinkview/",
								"api/namespaces/internals/interfaces/bookmarksview/",
								"api/namespaces/internals/interfaces/browserhistoryview/",
								"api/namespaces/internals/interfaces/browserview/",
								"api/namespaces/internals/interfaces/canvasview/",
								"api/namespaces/internals/interfaces/customcss/",
								"api/namespaces/internals/interfaces/embeddededitorview/",
								"api/namespaces/internals/interfaces/emptyview/",
								"api/namespaces/internals/interfaces/fileexplorerview/",
								"api/namespaces/internals/interfaces/filepropertiesview/",
								"api/namespaces/internals/interfaces/graphview/",
								"api/namespaces/internals/interfaces/iframedmarkdowneditor/",
								"api/namespaces/internals/interfaces/imageview/",
								"api/namespaces/internals/interfaces/infofileview/",
								"api/namespaces/internals/interfaces/localgraphview/",
								"api/namespaces/internals/interfaces/markdownbaseview/",
								"api/namespaces/internals/interfaces/markdownscrollableeditview/",
								"api/namespaces/internals/interfaces/metadataeditor/",
								"api/namespaces/internals/interfaces/metadataeditorproperty/",
								"api/namespaces/internals/interfaces/outgoinglinkview/",
								"api/namespaces/internals/interfaces/outlineview/",
								"api/namespaces/internals/interfaces/pdfview/",
								"api/namespaces/internals/interfaces/releasenotesview/",
								"api/namespaces/internals/interfaces/searchview/",
								"api/namespaces/internals/interfaces/tablecelleditor/",
								"api/namespaces/internals/interfaces/tagview/",
								"api/namespaces/internals/interfaces/unknownview/",
								"api/namespaces/internals/interfaces/videoview/",
								"api/namespaces/internals/interfaces/widgeteditorview/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/classes/editablefileview/",
								"api/namespaces/obsidian/classes/fileview/",
								"api/namespaces/obsidian/classes/hoverpopover/",
								"api/namespaces/obsidian/classes/itemview/",
								"api/namespaces/obsidian/classes/markdowneditview/",
								"api/namespaces/obsidian/classes/markdownpreviewview/",
								"api/namespaces/obsidian/classes/markdownrenderchild/",
								"api/namespaces/obsidian/classes/markdownrenderer/",
								"api/namespaces/obsidian/classes/markdownview/",
								"api/namespaces/obsidian/classes/menu/",
								"api/namespaces/obsidian/classes/plugin/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/obsidian/classes/textfileview/",
								"api/namespaces/obsidian/classes/view/",
								"api/namespaces/obsidian/interfaces/keymapinfo/",
								"api/namespaces/obsidian/interfaces/markdownpreviewevents/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/viewstateresult/": {
							"title": "ViewStateResult",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/internals/interfaces/allpropertiesview/",
								"api/namespaces/internals/interfaces/audioview/",
								"api/namespaces/internals/interfaces/backlinkview/",
								"api/namespaces/internals/interfaces/bookmarksview/",
								"api/namespaces/internals/interfaces/browserhistoryview/",
								"api/namespaces/internals/interfaces/browserview/",
								"api/namespaces/internals/interfaces/canvasview/",
								"api/namespaces/internals/interfaces/emptyview/",
								"api/namespaces/internals/interfaces/fileexplorerview/",
								"api/namespaces/internals/interfaces/filepropertiesview/",
								"api/namespaces/internals/interfaces/graphview/",
								"api/namespaces/internals/interfaces/imageview/",
								"api/namespaces/internals/interfaces/infofileview/",
								"api/namespaces/internals/interfaces/localgraphview/",
								"api/namespaces/internals/interfaces/outgoinglinkview/",
								"api/namespaces/internals/interfaces/outlineview/",
								"api/namespaces/internals/interfaces/pdfview/",
								"api/namespaces/internals/interfaces/releasenotesview/",
								"api/namespaces/internals/interfaces/searchview/",
								"api/namespaces/internals/interfaces/tagview/",
								"api/namespaces/internals/interfaces/unknownview/",
								"api/namespaces/internals/interfaces/videoview/",
								"api/namespaces/obsidian/classes/editablefileview/",
								"api/namespaces/obsidian/classes/fileview/",
								"api/namespaces/obsidian/classes/itemview/",
								"api/namespaces/obsidian/classes/markdownview/",
								"api/namespaces/obsidian/classes/textfileview/",
								"api/namespaces/obsidian/classes/view/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/appmenubarmanager/": {
							"title": "AppMenuBarManager",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/internals/interfaces/appvaultconfig/": {
							"title": "AppVaultConfig",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/appvaultconfighotkeysrecord/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/vault/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/appvaultconfighotkeysrecord/": {
							"title": "AppVaultConfigHotkeysRecord",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/internals/interfaces/appvaultconfig/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/audiorecorderplugininstance/": {
							"title": "AudioRecorderPluginInstance",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugin/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugins/",
								"api/namespaces/internals/type-aliases/internalpluginnameinstancesmapping/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/internalplugininstance/": {
							"title": "InternalPluginInstance",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/audiorecorderplugininstance/",
								"api/namespaces/internals/interfaces/backlinkplugininstance/",
								"api/namespaces/internals/interfaces/bookmarksplugininstance/",
								"api/namespaces/internals/interfaces/canvasplugininstance/",
								"api/namespaces/internals/interfaces/commandpaletteplugininstance/",
								"api/namespaces/internals/interfaces/dailynotesplugininstance/",
								"api/namespaces/internals/interfaces/editorstatusplugininstance/",
								"api/namespaces/internals/interfaces/fileexplorerplugininstance/",
								"api/namespaces/internals/interfaces/filerecoveryplugininstance/",
								"api/namespaces/internals/interfaces/globalsearchplugininstance/",
								"api/namespaces/internals/interfaces/graphplugininstance/",
								"api/namespaces/internals/interfaces/markdownimporterplugininstance/",
								"api/namespaces/internals/interfaces/notecomposerplugininstance/",
								"api/namespaces/internals/interfaces/outgoinglinkplugininstance/",
								"api/namespaces/internals/interfaces/outlineplugininstance/",
								"api/namespaces/internals/interfaces/pagepreviewplugininstance/",
								"api/namespaces/internals/interfaces/propertiesplugininstance/",
								"api/namespaces/internals/interfaces/publishplugininstance/",
								"api/namespaces/internals/interfaces/randomnoteplugininstance/",
								"api/namespaces/internals/interfaces/slashcommandplugininstance/",
								"api/namespaces/internals/interfaces/slidesplugininstance/",
								"api/namespaces/internals/interfaces/starredplugininstance/",
								"api/namespaces/internals/interfaces/switcherplugininstance/",
								"api/namespaces/internals/interfaces/syncplugininstance/",
								"api/namespaces/internals/interfaces/tagpaneplugininstance/",
								"api/namespaces/internals/interfaces/templatesplugininstance/",
								"api/namespaces/internals/interfaces/wordcountplugininstance/",
								"api/namespaces/internals/interfaces/workspacesplugininstance/",
								"api/namespaces/internals/interfaces/zkprefixerplugininstance/",
								"api/namespaces/internals/interfaces/internalplugin/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/audiorecorderplugininstance/",
								"api/namespaces/internals/interfaces/backlinkplugininstance/",
								"api/namespaces/internals/interfaces/bookmarksplugininstance/",
								"api/namespaces/internals/interfaces/canvasplugininstance/",
								"api/namespaces/internals/interfaces/commandpaletteplugininstance/",
								"api/namespaces/internals/interfaces/dailynotesplugininstance/",
								"api/namespaces/internals/interfaces/editorstatusplugininstance/",
								"api/namespaces/internals/interfaces/fileexplorerplugininstance/",
								"api/namespaces/internals/interfaces/filerecoveryplugininstance/",
								"api/namespaces/internals/interfaces/globalsearchplugininstance/",
								"api/namespaces/internals/interfaces/graphplugininstance/",
								"api/namespaces/internals/interfaces/internalplugin/",
								"api/namespaces/internals/interfaces/internalplugins/",
								"api/namespaces/internals/interfaces/markdownimporterplugininstance/",
								"api/namespaces/internals/interfaces/notecomposerplugininstance/",
								"api/namespaces/internals/interfaces/outgoinglinkplugininstance/",
								"api/namespaces/internals/interfaces/outlineplugininstance/",
								"api/namespaces/internals/interfaces/pagepreviewplugininstance/",
								"api/namespaces/internals/interfaces/propertiesplugininstance/",
								"api/namespaces/internals/interfaces/publishplugininstance/",
								"api/namespaces/internals/interfaces/randomnoteplugininstance/",
								"api/namespaces/internals/interfaces/slashcommandplugininstance/",
								"api/namespaces/internals/interfaces/slidesplugininstance/",
								"api/namespaces/internals/interfaces/starredplugininstance/",
								"api/namespaces/internals/interfaces/switcherplugininstance/",
								"api/namespaces/internals/interfaces/syncplugininstance/",
								"api/namespaces/internals/interfaces/tagpaneplugininstance/",
								"api/namespaces/internals/interfaces/templatesplugininstance/",
								"api/namespaces/internals/interfaces/wordcountplugininstance/",
								"api/namespaces/internals/interfaces/workspacesplugininstance/",
								"api/namespaces/internals/interfaces/zkprefixerplugininstance/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/internalplugin/": {
							"title": "InternalPlugin",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/internalplugininstance/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/audiorecorderplugininstance/",
								"api/namespaces/internals/interfaces/backlinkplugininstance/",
								"api/namespaces/internals/interfaces/bookmarksplugininstance/",
								"api/namespaces/internals/interfaces/canvasplugininstance/",
								"api/namespaces/internals/interfaces/commandpaletteplugininstance/",
								"api/namespaces/internals/interfaces/dailynotesplugininstance/",
								"api/namespaces/internals/interfaces/editorstatusplugininstance/",
								"api/namespaces/internals/interfaces/fileexplorerplugininstance/",
								"api/namespaces/internals/interfaces/filerecoveryplugininstance/",
								"api/namespaces/internals/interfaces/globalsearchplugininstance/",
								"api/namespaces/internals/interfaces/graphplugininstance/",
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugins/",
								"api/namespaces/internals/interfaces/markdownimporterplugininstance/",
								"api/namespaces/internals/interfaces/notecomposerplugininstance/",
								"api/namespaces/internals/interfaces/outgoinglinkplugininstance/",
								"api/namespaces/internals/interfaces/outlineplugininstance/",
								"api/namespaces/internals/interfaces/pagepreviewplugininstance/",
								"api/namespaces/internals/interfaces/propertiesplugininstance/",
								"api/namespaces/internals/interfaces/publishplugininstance/",
								"api/namespaces/internals/interfaces/randomnoteplugininstance/",
								"api/namespaces/internals/interfaces/slashcommandplugininstance/",
								"api/namespaces/internals/interfaces/slidesplugininstance/",
								"api/namespaces/internals/interfaces/starredplugininstance/",
								"api/namespaces/internals/interfaces/switcherplugininstance/",
								"api/namespaces/internals/interfaces/syncplugininstance/",
								"api/namespaces/internals/interfaces/tagpaneplugininstance/",
								"api/namespaces/internals/interfaces/templatesplugininstance/",
								"api/namespaces/internals/interfaces/wordcountplugininstance/",
								"api/namespaces/internals/interfaces/workspacesplugininstance/",
								"api/namespaces/internals/interfaces/zkprefixerplugininstance/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/audioview/": {
							"title": "AudioView",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/editablefileview/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/obsidian/classes/menu/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/",
								"api/namespaces/obsidian/interfaces/viewstateresult/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/editablefileview/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/editablefileview/": {
							"title": "EditableFileView",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/fileview/",
								"api/namespaces/obsidian/classes/textfileview/",
								"api/namespaces/internals/interfaces/audioview/",
								"api/namespaces/internals/interfaces/imageview/",
								"api/namespaces/internals/interfaces/pdfview/",
								"api/namespaces/internals/interfaces/videoview/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/obsidian/classes/menu/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/",
								"api/namespaces/obsidian/interfaces/viewstateresult/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/audioview/",
								"api/namespaces/internals/interfaces/imageview/",
								"api/namespaces/internals/interfaces/pdfview/",
								"api/namespaces/internals/interfaces/videoview/",
								"api/namespaces/obsidian/classes/fileview/",
								"api/namespaces/obsidian/classes/textfileview/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/tfile/": {
							"title": "TFile",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/tabstractfile/",
								"api/namespaces/obsidian/classes/tfolder/",
								"api/namespaces/obsidian/interfaces/filestats/",
								"api/namespaces/obsidian/classes/vault/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/audioview/",
								"api/namespaces/internals/interfaces/backlinkview/",
								"api/namespaces/internals/interfaces/bookmarksview/",
								"api/namespaces/internals/interfaces/canvasleaf/",
								"api/namespaces/internals/interfaces/canvaslinkupdater/",
								"api/namespaces/internals/interfaces/canvasview/",
								"api/namespaces/internals/interfaces/dragmanager/",
								"api/namespaces/internals/interfaces/editorsuggests/",
								"api/namespaces/internals/interfaces/embeddededitorview/",
								"api/namespaces/internals/interfaces/embedregistry/",
								"api/namespaces/internals/interfaces/fileexplorerleaf/",
								"api/namespaces/internals/interfaces/fileexplorerplugininstance/",
								"api/namespaces/internals/interfaces/fileexplorerview/",
								"api/namespaces/internals/interfaces/filepropertiesview/",
								"api/namespaces/internals/interfaces/filesuggest/",
								"api/namespaces/internals/interfaces/filesuggestmanager/",
								"api/namespaces/internals/interfaces/globalsearchleaf/",
								"api/namespaces/internals/interfaces/iframedmarkdowneditor/",
								"api/namespaces/internals/interfaces/imageview/",
								"api/namespaces/internals/interfaces/infofileview/",
								"api/namespaces/internals/interfaces/linkupdate/",
								"api/namespaces/internals/interfaces/linkupdater/",
								"api/namespaces/internals/interfaces/localgraphview/",
								"api/namespaces/internals/interfaces/markdownbaseview/",
								"api/namespaces/internals/interfaces/markdownscrollableeditview/",
								"api/namespaces/internals/interfaces/outgoinglinkview/",
								"api/namespaces/internals/interfaces/outlineview/",
								"api/namespaces/internals/interfaces/pdfview/",
								"api/namespaces/internals/interfaces/tablecelleditor/",
								"api/namespaces/internals/interfaces/videoview/",
								"api/namespaces/internals/interfaces/widgeteditorview/",
								"api/namespaces/internals/type-aliases/embeddableconstructor/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/editablefileview/",
								"api/namespaces/obsidian/classes/editorsuggest/",
								"api/namespaces/obsidian/classes/filemanager/",
								"api/namespaces/obsidian/classes/fileview/",
								"api/namespaces/obsidian/classes/markdowneditview/",
								"api/namespaces/obsidian/classes/markdownpreviewview/",
								"api/namespaces/obsidian/classes/markdownrenderer/",
								"api/namespaces/obsidian/classes/markdownview/",
								"api/namespaces/obsidian/classes/metadatacache/",
								"api/namespaces/obsidian/classes/tabstractfile/",
								"api/namespaces/obsidian/classes/textfileview/",
								"api/namespaces/obsidian/classes/vault/",
								"api/namespaces/obsidian/classes/workspace/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/interfaces/editorsuggestcontext/",
								"api/namespaces/obsidian/interfaces/markdownfileinfo/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/backlinkplugininstance/": {
							"title": "BacklinkPluginInstance",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugin/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugins/",
								"api/namespaces/internals/type-aliases/internalpluginnameinstancesmapping/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/backlinkview/": {
							"title": "BacklinkView",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/infofileview/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/obsidian/classes/menu/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/",
								"api/namespaces/obsidian/interfaces/viewstateresult/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/infofileview/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/infofileview/": {
							"title": "InfoFileView",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/fileview/",
								"api/namespaces/internals/interfaces/backlinkview/",
								"api/namespaces/internals/interfaces/filepropertiesview/",
								"api/namespaces/internals/interfaces/localgraphview/",
								"api/namespaces/internals/interfaces/outgoinglinkview/",
								"api/namespaces/internals/interfaces/outlineview/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/obsidian/classes/menu/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/",
								"api/namespaces/obsidian/interfaces/viewstateresult/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/backlinkview/",
								"api/namespaces/internals/interfaces/filepropertiesview/",
								"api/namespaces/internals/interfaces/localgraphview/",
								"api/namespaces/internals/interfaces/outgoinglinkview/",
								"api/namespaces/internals/interfaces/outlineview/",
								"api/namespaces/obsidian/classes/fileview/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/baseeditor/": {
							"title": "BaseEditor",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/editor/",
								"api/namespaces/obsidian/interfaces/editorposition/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/editor/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/editor/": {
							"title": "Editor",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/baseeditor/",
								"api/namespaces/internals/interfaces/markdownscrollableeditview/",
								"api/namespaces/obsidian/interfaces/editorrange/",
								"api/namespaces/obsidian/interfaces/editorselection/",
								"api/namespaces/obsidian/interfaces/editorposition/",
								"api/namespaces/obsidian/type-aliases/editorcommandname/",
								"api/namespaces/internals/interfaces/searchcursor/",
								"api/namespaces/obsidian/interfaces/editorselectionorcaret/",
								"api/namespaces/obsidian/interfaces/editortransaction/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/baseeditor/",
								"api/namespaces/internals/interfaces/editorsearchcomponent/",
								"api/namespaces/internals/interfaces/filesuggest/",
								"api/namespaces/internals/interfaces/iframedmarkdowneditor/",
								"api/namespaces/internals/interfaces/markdownbaseview/",
								"api/namespaces/internals/interfaces/markdownscrollableeditview/",
								"api/namespaces/internals/interfaces/tablecelleditor/",
								"api/namespaces/obsidian/classes/editorsuggest/",
								"api/namespaces/obsidian/classes/markdowneditview/",
								"api/namespaces/obsidian/classes/markdownview/",
								"api/namespaces/obsidian/interfaces/command/",
								"api/namespaces/obsidian/interfaces/editorsuggestcontext/",
								"api/namespaces/obsidian/interfaces/markdownfileinfo/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/editorposition/": {
							"title": "EditorPosition",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/internals/interfaces/baseeditor/",
								"api/namespaces/internals/interfaces/filesuggest/",
								"api/namespaces/internals/interfaces/searchcursor/",
								"api/namespaces/internals/interfaces/token/",
								"api/namespaces/obsidian/classes/editor/",
								"api/namespaces/obsidian/classes/editorsuggest/",
								"api/namespaces/obsidian/interfaces/editorchange/",
								"api/namespaces/obsidian/interfaces/editorrange/",
								"api/namespaces/obsidian/interfaces/editorrangeorcaret/",
								"api/namespaces/obsidian/interfaces/editorselection/",
								"api/namespaces/obsidian/interfaces/editorselectionorcaret/",
								"api/namespaces/obsidian/interfaces/editorsuggestcontext/",
								"api/namespaces/obsidian/interfaces/editorsuggesttriggerinfo/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/bookmarksplugininstance/": {
							"title": "BookmarksPluginInstance",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugin/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugins/",
								"api/namespaces/internals/type-aliases/internalpluginnameinstancesmapping/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/bookmarksview/": {
							"title": "BookmarksView",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/itemview/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/obsidian/classes/menu/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/",
								"api/namespaces/obsidian/interfaces/viewstateresult/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/itemview/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/browserhistoryview/": {
							"title": "BrowserHistoryView",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/itemview/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/obsidian/classes/menu/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/",
								"api/namespaces/obsidian/interfaces/viewstateresult/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/itemview/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/browserview/": {
							"title": "BrowserView",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/itemview/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/obsidian/classes/menu/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/",
								"api/namespaces/obsidian/interfaces/viewstateresult/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/itemview/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/canvasconnection/": {
							"title": "CanvasConnection",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/internals/interfaces/canvasleaf/": {
							"title": "CanvasLeaf",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/workspacemobiledrawer/",
								"api/namespaces/obsidian/classes/workspacetabs/",
								"api/namespaces/obsidian/classes/view/",
								"api/namespaces/obsidian/classes/workspacecontainer/",
								"api\\namespaces\\obsidian\\classes\\workspaceroot/",
								"api\\namespaces\\obsidian\\classes\\workspacewindow/",
								"api/namespaces/obsidian/classes/workspaceitem/",
								"api/namespaces/obsidian/interfaces/viewstate/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/obsidian/interfaces/openviewstate/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/workspaceleaf/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/workspacemobiledrawer/": {
							"title": "WorkspaceMobileDrawer",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/workspaceparent/",
								"api/namespaces/obsidian/classes/workspacecontainer/",
								"api\\namespaces\\obsidian\\classes\\workspaceroot/",
								"api\\namespaces\\obsidian\\classes\\workspacewindow/",
								"api/namespaces/obsidian/classes/workspaceitem/",
								"api/namespaces/obsidian/interfaces/eventref/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/canvasleaf/",
								"api/namespaces/internals/interfaces/fileexplorerleaf/",
								"api/namespaces/internals/interfaces/globalsearchleaf/",
								"api/namespaces/obsidian/classes/workspace/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/workspaceparent/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/workspacetabs/": {
							"title": "WorkspaceTabs",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/workspaceparent/",
								"api/namespaces/obsidian/classes/workspacesplit/",
								"api/namespaces/obsidian/classes/workspacecontainer/",
								"api\\namespaces\\obsidian\\classes\\workspaceroot/",
								"api\\namespaces\\obsidian\\classes\\workspacewindow/",
								"api/namespaces/obsidian/classes/workspaceitem/",
								"api/namespaces/obsidian/interfaces/eventref/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/canvasleaf/",
								"api/namespaces/internals/interfaces/fileexplorerleaf/",
								"api/namespaces/internals/interfaces/globalsearchleaf/",
								"api/namespaces/obsidian/classes/workspace/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/workspaceparent/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/view/": {
							"title": "View",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/classes/itemview/",
								"api/namespaces/internals/interfaces/fileexplorerview/",
								"api/namespaces/internals/interfaces/searchview/",
								"api/namespaces/internals/interfaces/tagview/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/obsidian/classes/menu/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/",
								"api/namespaces/obsidian/interfaces/viewstateresult/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/canvasleaf/",
								"api/namespaces/internals/interfaces/fileexplorerleaf/",
								"api/namespaces/internals/interfaces/fileexplorerview/",
								"api/namespaces/internals/interfaces/globalsearchleaf/",
								"api/namespaces/internals/interfaces/outlineview/",
								"api/namespaces/internals/interfaces/searchview/",
								"api/namespaces/internals/interfaces/tagview/",
								"api/namespaces/internals/interfaces/tree/",
								"api/namespaces/internals/interfaces/viewregistry/",
								"api/namespaces/internals/interfaces/viewregistryviewbytyperecord/",
								"api/namespaces/internals/type-aliases/treeitem/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/classes/itemview/",
								"api/namespaces/obsidian/classes/workspace/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/type-aliases/viewcreator/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/workspacecontainer/": {
							"title": "WorkspaceContainer",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/workspacesplit/",
								"api/namespaces/obsidian/classes/workspaceroot/",
								"api/namespaces/obsidian/classes/workspacewindow/",
								"api/namespaces/obsidian/classes/workspaceparent/",
								"api\\namespaces\\obsidian\\classes\\workspaceroot/",
								"api\\namespaces\\obsidian\\classes\\workspacewindow/",
								"api/namespaces/obsidian/classes/workspaceitem/",
								"api/namespaces/obsidian/interfaces/eventref/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/canvasleaf/",
								"api/namespaces/internals/interfaces/fileexplorerleaf/",
								"api/namespaces/internals/interfaces/globalsearchleaf/",
								"api/namespaces/obsidian/classes/workspacefloating/",
								"api/namespaces/obsidian/classes/workspaceitem/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/workspacemobiledrawer/",
								"api/namespaces/obsidian/classes/workspaceparent/",
								"api/namespaces/obsidian/classes/workspaceroot/",
								"api/namespaces/obsidian/classes/workspacesidedock/",
								"api/namespaces/obsidian/classes/workspacesplit/",
								"api/namespaces/obsidian/classes/workspacetabs/",
								"api/namespaces/obsidian/classes/workspacewindow/"
							],
							"tags": []
						},
						"api\\namespaces\\obsidian\\classes\\workspaceroot/": {
							"title": "",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/internals/interfaces/canvasleaf/",
								"api/namespaces/internals/interfaces/fileexplorerleaf/",
								"api/namespaces/internals/interfaces/globalsearchleaf/",
								"api/namespaces/obsidian/classes/workspacecontainer/",
								"api/namespaces/obsidian/classes/workspacefloating/",
								"api/namespaces/obsidian/classes/workspaceitem/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/workspacemobiledrawer/",
								"api/namespaces/obsidian/classes/workspaceparent/",
								"api/namespaces/obsidian/classes/workspaceroot/",
								"api/namespaces/obsidian/classes/workspacesidedock/",
								"api/namespaces/obsidian/classes/workspacesplit/",
								"api/namespaces/obsidian/classes/workspacetabs/",
								"api/namespaces/obsidian/classes/workspacewindow/"
							],
							"tags": []
						},
						"api\\namespaces\\obsidian\\classes\\workspacewindow/": {
							"title": "",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/internals/interfaces/canvasleaf/",
								"api/namespaces/internals/interfaces/fileexplorerleaf/",
								"api/namespaces/internals/interfaces/globalsearchleaf/",
								"api/namespaces/obsidian/classes/workspacecontainer/",
								"api/namespaces/obsidian/classes/workspacefloating/",
								"api/namespaces/obsidian/classes/workspaceitem/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/workspacemobiledrawer/",
								"api/namespaces/obsidian/classes/workspaceparent/",
								"api/namespaces/obsidian/classes/workspaceroot/",
								"api/namespaces/obsidian/classes/workspacesidedock/",
								"api/namespaces/obsidian/classes/workspacesplit/",
								"api/namespaces/obsidian/classes/workspacetabs/",
								"api/namespaces/obsidian/classes/workspacewindow/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/workspaceitem/": {
							"title": "WorkspaceItem",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/events/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/workspaceparent/",
								"api/namespaces/obsidian/classes/workspacecontainer/",
								"api\\namespaces\\obsidian\\classes\\workspaceroot/",
								"api\\namespaces\\obsidian\\classes\\workspacewindow/",
								"api/namespaces/obsidian/interfaces/eventref/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/canvasleaf/",
								"api/namespaces/internals/interfaces/fileexplorerleaf/",
								"api/namespaces/internals/interfaces/globalsearchleaf/",
								"api/namespaces/obsidian/classes/events/",
								"api/namespaces/obsidian/classes/workspacecontainer/",
								"api/namespaces/obsidian/classes/workspacefloating/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/workspacemobiledrawer/",
								"api/namespaces/obsidian/classes/workspaceparent/",
								"api/namespaces/obsidian/classes/workspaceroot/",
								"api/namespaces/obsidian/classes/workspacesidedock/",
								"api/namespaces/obsidian/classes/workspacesplit/",
								"api/namespaces/obsidian/classes/workspacetabs/",
								"api/namespaces/obsidian/classes/workspacewindow/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/viewstate/": {
							"title": "ViewState",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/workspaceleaf/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/canvasleaf/",
								"api/namespaces/internals/interfaces/fileexplorerleaf/",
								"api/namespaces/internals/interfaces/globalsearchleaf/",
								"api/namespaces/internals/interfaces/leafentry/",
								"api/namespaces/internals/interfaces/statehistory/",
								"api/namespaces/obsidian/classes/workspaceleaf/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/openviewstate/": {
							"title": "OpenViewState",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/workspaceleaf/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/canvasleaf/",
								"api/namespaces/internals/interfaces/fileexplorerleaf/",
								"api/namespaces/internals/interfaces/globalsearchleaf/",
								"api/namespaces/obsidian/classes/workspace/",
								"api/namespaces/obsidian/classes/workspaceleaf/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/canvaslinkupdater/": {
							"title": "CanvasLinkUpdater",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/linkupdater/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/internals/interfaces/canvasplugininstance/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/internals/interfaces/linkchangeupdate/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/linkupdater/",
								"api/namespaces/internals/interfaces/linkupdaters/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/linkupdater/": {
							"title": "LinkUpdater",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/canvaslinkupdater/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/internals/interfaces/linkchangeupdate/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/canvaslinkupdater/",
								"api/namespaces/internals/interfaces/linkupdaters/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/canvasplugininstance/": {
							"title": "CanvasPluginInstance",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugin/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/canvaslinkupdater/",
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugins/",
								"api/namespaces/internals/type-aliases/internalpluginnameinstancesmapping/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/linkchangeupdate/": {
							"title": "LinkChangeUpdate",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/referencecache/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/canvaslinkupdater/",
								"api/namespaces/internals/interfaces/linkupdater/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/canvasnode/": {
							"title": "CanvasNode",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/internals/interfaces/canvasview/": {
							"title": "CanvasView",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/textfileview/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/obsidian/classes/menu/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/",
								"api/namespaces/obsidian/interfaces/viewstateresult/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/textfileview/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/textfileview/": {
							"title": "TextFileView",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/editablefileview/",
								"api/namespaces/obsidian/classes/markdownview/",
								"api/namespaces/internals/interfaces/canvasview/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/obsidian/classes/menu/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/",
								"api/namespaces/obsidian/interfaces/viewstateresult/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/canvasview/",
								"api/namespaces/obsidian/classes/editablefileview/",
								"api/namespaces/obsidian/classes/markdownview/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/clipboardmanager/": {
							"title": "ClipBoardManager",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/markdownview/",
								"api/namespaces/obsidian/classes/tabstractfile/",
								"api/namespaces/internals/interfaces/importedattachments/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/iframedmarkdowneditor/",
								"api/namespaces/internals/interfaces/markdownbaseview/",
								"api/namespaces/internals/interfaces/markdownscrollableeditview/",
								"api/namespaces/internals/interfaces/tablecelleditor/",
								"api/namespaces/obsidian/classes/markdowneditview/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/markdownview/": {
							"title": "MarkdownView",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/textfileview/",
								"api/namespaces/obsidian/interfaces/markdownfileinfo/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/interfaces/markdownsubview/",
								"api/namespaces/obsidian/classes/markdowneditview/",
								"api/namespaces/obsidian/classes/editor/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/obsidian/classes/hoverpopover/",
								"api/namespaces/internals/interfaces/metadataeditor/",
								"api/namespaces/obsidian/classes/markdownpreviewview/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/obsidian/type-aliases/markdownviewmodetype/",
								"api/namespaces/obsidian/classes/menu/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/",
								"api/namespaces/obsidian/interfaces/viewstateresult/",
								"api/namespaces/internals/interfaces/token/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/clipboardmanager/",
								"api/namespaces/internals/interfaces/metadataeditor/",
								"api/namespaces/obsidian/classes/markdowneditview/",
								"api/namespaces/obsidian/classes/markdownpreviewview/",
								"api/namespaces/obsidian/classes/textfileview/",
								"api/namespaces/obsidian/interfaces/command/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/tabstractfile/": {
							"title": "TAbstractFile",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/obsidian/classes/tfolder/",
								"api/namespaces/obsidian/classes/vault/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/clipboardmanager/",
								"api/namespaces/internals/interfaces/draggable/",
								"api/namespaces/internals/interfaces/dragmanager/",
								"api/namespaces/internals/interfaces/fileexplorerview/",
								"api/namespaces/internals/interfaces/filetreeitem/",
								"api/namespaces/internals/interfaces/vaultfilemaprecord/",
								"api/namespaces/internals/interfaces/widgeteditorview/",
								"api/namespaces/obsidian/classes/filemanager/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/obsidian/classes/tfolder/",
								"api/namespaces/obsidian/classes/vault/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/importedattachments/": {
							"title": "ImportedAttachments",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/internals/interfaces/clipboardmanager/",
								"api/namespaces/obsidian/classes/app/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/commandpaletteplugininstance/": {
							"title": "CommandPalettePluginInstance",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugin/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugins/",
								"api/namespaces/internals/type-aliases/internalpluginnameinstancesmapping/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/commands/": {
							"title": "Commands",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/internals/interfaces/commandscommandsrecord/",
								"api/namespaces/internals/interfaces/commandseditorcommandsrecord/",
								"api/namespaces/obsidian/interfaces/command/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/app/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/commandscommandsrecord/": {
							"title": "CommandsCommandsRecord",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/command/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/commands/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/commandseditorcommandsrecord/": {
							"title": "CommandsEditorCommandsRecord",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/command/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/commands/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/command/": {
							"title": "Command",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/editor/",
								"api/namespaces/obsidian/classes/markdownview/",
								"api/namespaces/obsidian/interfaces/markdownfileinfo/",
								"api/namespaces/obsidian/interfaces/hotkey/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/commands/",
								"api/namespaces/internals/interfaces/commandscommandsrecord/",
								"api/namespaces/internals/interfaces/commandseditorcommandsrecord/",
								"api/namespaces/obsidian/classes/plugin/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/customarraydict/": {
							"title": "CustomArrayDict",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/customarraydictdatarecord/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/metadatacache/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/customarraydictdatarecord/": {
							"title": "CustomArrayDictDataRecord",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/internals/interfaces/customarraydict/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/customcss/": {
							"title": "CustomCSS",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/internals/interfaces/customcssthemesrecord/",
								"api/namespaces/internals/interfaces/thememanifest/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/component/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/customcssthemesrecord/": {
							"title": "CustomCSSThemesRecord",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/thememanifest/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/customcss/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/thememanifest/": {
							"title": "ThemeManifest",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/internals/interfaces/customcss/",
								"api/namespaces/internals/interfaces/customcssthemesrecord/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/customcssupdatesrecord/": {
							"title": "CustomCSSUpdatesRecord",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/internals/interfaces/dailynotesplugininstance/": {
							"title": "DailyNotesPluginInstance",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugin/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugins/",
								"api/namespaces/internals/type-aliases/internalpluginnameinstancesmapping/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/dataadapterfilesrecord/": {
							"title": "DataAdapterFilesRecord",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/fileentry/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/filesystemadapter/",
								"api/namespaces/obsidian/interfaces/dataadapter/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/fileentry/": {
							"title": "FileEntry",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/internals/interfaces/dataadapterfilesrecord/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/dataadapterwatchersrecord/": {
							"title": "DataAdapterWatchersRecord",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/internals/interfaces/draggable/": {
							"title": "Draggable",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/tabstractfile/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/dragmanager/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/dragmanager/": {
							"title": "DragManager",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/internals/interfaces/dragstartevent/",
								"api/namespaces/internals/interfaces/draggable/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/obsidian/classes/tabstractfile/",
								"api/namespaces/obsidian/classes/tfolder/"
							],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/internals/interfaces/dragstartevent/": {
							"title": "DragStartEvent",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/internals/interfaces/dragmanager/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/tfolder/": {
							"title": "TFolder",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/tabstractfile/",
								"api/namespaces/obsidian/classes/vault/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/dragmanager/",
								"api/namespaces/internals/interfaces/fileexplorerplugininstance/",
								"api/namespaces/internals/interfaces/fileexplorerview/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/filemanager/",
								"api/namespaces/obsidian/classes/tabstractfile/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/obsidian/classes/vault/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/dropresult/": {
							"title": "DropResult",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/internals/interfaces/searchcursor/": {
							"title": "SearchCursor",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/editorposition/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/editorsearchcomponent/",
								"api/namespaces/obsidian/classes/editor/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/editorrange/": {
							"title": "EditorRange",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/token/",
								"api/namespaces/obsidian/interfaces/editorposition/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/editorsearchcomponent/",
								"api/namespaces/internals/interfaces/statehistory/",
								"api/namespaces/internals/interfaces/token/",
								"api/namespaces/obsidian/classes/editor/",
								"api/namespaces/obsidian/classes/markdowneditview/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/editorstatusplugininstance/": {
							"title": "EditorStatusPluginInstance",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugin/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugins/",
								"api/namespaces/internals/type-aliases/internalpluginnameinstancesmapping/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/editorsuggests/": {
							"title": "EditorSuggests",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/editorsuggest/",
								"api/namespaces/internals/interfaces/markdownbaseview/",
								"api/namespaces/obsidian/classes/tfile/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/iframedmarkdowneditor/",
								"api/namespaces/internals/interfaces/markdownbaseview/",
								"api/namespaces/internals/interfaces/markdownscrollableeditview/",
								"api/namespaces/internals/interfaces/tablecelleditor/",
								"api/namespaces/obsidian/classes/markdowneditview/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/editorsuggest/": {
							"title": "EditorSuggest",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/popoversuggest/",
								"api/namespaces/internals/interfaces/filesuggest/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/interfaces/editorsuggestcontext/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/internals/interfaces/suggestioncontainer/",
								"api/namespaces/obsidian/interfaces/editorsuggesttriggerinfo/",
								"api/namespaces/obsidian/interfaces/editorposition/",
								"api/namespaces/obsidian/classes/editor/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/obsidian/interfaces/instruction/",
								"api/namespaces/obsidian/interfaces/searchresult/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/editorsuggests/",
								"api/namespaces/internals/interfaces/filesuggest/",
								"api/namespaces/internals/interfaces/suggestioncontainer/",
								"api/namespaces/obsidian/classes/plugin/",
								"api/namespaces/obsidian/classes/popoversuggest/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/markdownbaseview/": {
							"title": "MarkdownBaseView",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/internals/interfaces/markdownscrollableeditview/",
								"api/namespaces/internals/interfaces/tablecelleditor/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/internals/interfaces/clipboardmanager/",
								"api/namespaces/obsidian/classes/editor/",
								"api/namespaces/internals/interfaces/editorsuggests/",
								"api/namespaces/obsidian/interfaces/markdownfileinfo/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/internals/interfaces/foldinfo/",
								"api/namespaces/internals/interfaces/tableeditor/",
								"api/namespaces/internals/interfaces/tablecell/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/",
								"api/namespaces/internals/interfaces/token/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/editorsuggests/",
								"api/namespaces/internals/interfaces/markdownscrollableeditview/",
								"api/namespaces/internals/interfaces/tablecelleditor/",
								"api/namespaces/obsidian/classes/component/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/embedcontext/": {
							"title": "EmbedContext",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/app/"
							],
							"backlinks": [
								"api/namespaces/internals/type-aliases/embeddableconstructor/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/embeddededitorview/": {
							"title": "EmbeddedEditorView",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/internals/interfaces/widgeteditorview/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/internals/interfaces/iframedmarkdowneditor/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/obsidian/classes/hoverpopover/",
								"api/namespaces/obsidian/classes/markdownpreviewview/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/widgeteditorview/",
								"api/namespaces/obsidian/classes/component/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/widgeteditorview/": {
							"title": "WidgetEditorView",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/embeddededitorview/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/internals/interfaces/iframedmarkdowneditor/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/obsidian/classes/hoverpopover/",
								"api/namespaces/obsidian/classes/markdownpreviewview/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/internals/interfaces/foldinfo/",
								"api/namespaces/obsidian/interfaces/cachedmetadata/",
								"api/namespaces/obsidian/classes/tabstractfile/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/embeddededitorview/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/iframedmarkdowneditor/": {
							"title": "IFramedMarkdownEditor",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/markdownscrollableeditview/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/internals/interfaces/clipboardmanager/",
								"api/namespaces/obsidian/classes/editor/",
								"api/namespaces/internals/interfaces/editorsuggests/",
								"api/namespaces/obsidian/interfaces/markdownfileinfo/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/internals/interfaces/editorsearchcomponent/",
								"api/namespaces/internals/interfaces/tablecelleditor/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/internals/interfaces/foldinfo/",
								"api/namespaces/internals/interfaces/tableeditor/",
								"api/namespaces/internals/interfaces/tablecell/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/",
								"api/namespaces/internals/interfaces/token/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/embeddededitorview/",
								"api/namespaces/internals/interfaces/markdownscrollableeditview/",
								"api/namespaces/internals/interfaces/widgeteditorview/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/hoverpopover/": {
							"title": "HoverPopover",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/hoverparent/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/enumerations/popoverstate/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/embeddededitorview/",
								"api/namespaces/internals/interfaces/metadataeditor/",
								"api/namespaces/internals/interfaces/widgeteditorview/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/classes/markdowneditview/",
								"api/namespaces/obsidian/classes/markdownpreviewview/",
								"api/namespaces/obsidian/classes/markdownrenderer/",
								"api/namespaces/obsidian/classes/markdownview/",
								"api/namespaces/obsidian/interfaces/hoverparent/",
								"api/namespaces/obsidian/interfaces/markdownfileinfo/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/markdownpreviewview/": {
							"title": "MarkdownPreviewView",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/markdownrenderer/",
								"api/namespaces/obsidian/interfaces/markdownsubview/",
								"api/namespaces/obsidian/interfaces/markdownpreviewevents/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/hoverpopover/",
								"api/namespaces/internals/interfaces/readviewrenderer/",
								"api/namespaces/obsidian/classes/markdownview/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/embeddededitorview/",
								"api/namespaces/internals/interfaces/widgeteditorview/",
								"api/namespaces/obsidian/classes/markdownrenderer/",
								"api/namespaces/obsidian/classes/markdownview/",
								"api/namespaces/obsidian/interfaces/markdownpreviewevents/",
								"api/namespaces/obsidian/interfaces/markdownsubview/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/embedregistry/": {
							"title": "EmbedRegistry",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/events/",
								"api/namespaces/internals/interfaces/embedregistryembedbyextensionrecord/",
								"api/namespaces/internals/type-aliases/embeddableconstructor/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/obsidian/interfaces/eventref/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/events/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/events/": {
							"title": "Events",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/metadatacache/",
								"api/namespaces/obsidian/classes/vault/",
								"api/namespaces/obsidian/classes/workspace/",
								"api/namespaces/obsidian/classes/workspaceitem/",
								"api/namespaces/internals/interfaces/embedregistry/",
								"api/namespaces/internals/interfaces/metadatatypemanager/",
								"api/namespaces/internals/interfaces/viewregistry/",
								"api/namespaces/internals/interfaces/internalplugins/",
								"api/namespaces/obsidian/interfaces/eventref/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/embedregistry/",
								"api/namespaces/internals/interfaces/internalplugins/",
								"api/namespaces/internals/interfaces/metadatatypemanager/",
								"api/namespaces/internals/interfaces/viewregistry/",
								"api/namespaces/obsidian/classes/metadatacache/",
								"api/namespaces/obsidian/classes/vault/",
								"api/namespaces/obsidian/classes/workspace/",
								"api/namespaces/obsidian/classes/workspaceitem/",
								"api/namespaces/obsidian/interfaces/eventref/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/embedregistryembedbyextensionrecord/": {
							"title": "EmbedRegistryEmbedByExtensionRecord",
							"content": "",
							"links": [
								"api/namespaces/internals/type-aliases/embeddableconstructor/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/embedregistry/"
							],
							"tags": []
						},
						"api/namespaces/internals/type-aliases/embeddableconstructor/": {
							"title": "EmbeddableConstructor",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/internals/interfaces/embedcontext/",
								"api/namespaces/obsidian/classes/tfile/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/embedregistry/",
								"api/namespaces/internals/interfaces/embedregistryembedbyextensionrecord/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/emptyview/": {
							"title": "EmptyView",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/itemview/",
								"api/namespaces/internals/interfaces/unknownview/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/obsidian/classes/menu/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/",
								"api/namespaces/obsidian/interfaces/viewstateresult/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/unknownview/",
								"api/namespaces/obsidian/classes/itemview/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/unknownview/": {
							"title": "UnknownView",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/emptyview/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/obsidian/classes/menu/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/",
								"api/namespaces/obsidian/interfaces/viewstateresult/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/emptyview/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/filecacheentry/": {
							"title": "FileCacheEntry",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/internals/interfaces/metadatacachefilecacherecord/",
								"api/namespaces/obsidian/classes/metadatacache/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/fileexplorerleaf/": {
							"title": "FileExplorerLeaf",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/workspacemobiledrawer/",
								"api/namespaces/obsidian/classes/workspacetabs/",
								"api/namespaces/internals/interfaces/fileexplorerview/",
								"api/namespaces/obsidian/classes/workspacecontainer/",
								"api\\namespaces\\obsidian\\classes\\workspaceroot/",
								"api\\namespaces\\obsidian\\classes\\workspacewindow/",
								"api/namespaces/obsidian/classes/workspaceitem/",
								"api/namespaces/obsidian/interfaces/viewstate/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/view/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/obsidian/interfaces/openviewstate/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/workspace/",
								"api/namespaces/obsidian/classes/workspaceleaf/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/fileexplorerview/": {
							"title": "FileExplorerView",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/view/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/internals/interfaces/fileexplorerviewfileitemsrecord/",
								"api/namespaces/internals/interfaces/weakmapwrapper/",
								"api/namespaces/obsidian/classes/tabstractfile/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/internals/interfaces/tree/",
								"api/namespaces/internals/interfaces/filetreeitem/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/obsidian/type-aliases/panetype/",
								"api/namespaces/obsidian/classes/tfolder/",
								"api/namespaces/obsidian/classes/menu/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/",
								"api/namespaces/obsidian/interfaces/viewstateresult/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/fileexplorerleaf/",
								"api/namespaces/obsidian/classes/view/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/fileexplorerplugininstance/": {
							"title": "FileExplorerPluginInstance",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugin/",
								"api/namespaces/obsidian/classes/tfolder/",
								"api/namespaces/obsidian/classes/tfile/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugins/",
								"api/namespaces/internals/type-aliases/internalpluginnameinstancesmapping/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/fileexplorerviewfileitemsrecord/": {
							"title": "FileExplorerViewFileItemsRecord",
							"content": "",
							"links": [
								"api/namespaces/internals/type-aliases/treeitem/",
								"api/namespaces/internals/interfaces/filetreeitem/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/fileexplorerview/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/weakmapwrapper/": {
							"title": "WeakMapWrapper",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/internals/interfaces/fileexplorerview/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/tree/": {
							"title": "Tree",
							"content": "",
							"links": [
								"api/namespaces/internals/type-aliases/treenode/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/obsidian/classes/view/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/fileexplorerview/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/filetreeitem/": {
							"title": "FileTreeItem",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/tabstractfile/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/fileexplorerview/",
								"api/namespaces/internals/interfaces/fileexplorerviewfileitemsrecord/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/type-aliases/panetype/": {
							"title": "PaneType",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/internals/interfaces/fileexplorerview/",
								"api/namespaces/obsidian/classes/filemanager/",
								"api/namespaces/obsidian/classes/keymap/",
								"api/namespaces/obsidian/classes/workspace/"
							],
							"tags": []
						},
						"api/namespaces/internals/type-aliases/treeitem/": {
							"title": "TreeItem",
							"content": "",
							"links": [
								"api/namespaces/internals/type-aliases/treenode/",
								"api/namespaces/obsidian/classes/view/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/fileexplorerviewfileitemsrecord/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/filepropertiesview/": {
							"title": "FilePropertiesView",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/infofileview/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/obsidian/classes/menu/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/",
								"api/namespaces/obsidian/interfaces/viewstateresult/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/infofileview/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/filerecoveryplugininstance/": {
							"title": "FileRecoveryPluginInstance",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugin/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugins/",
								"api/namespaces/internals/type-aliases/internalpluginnameinstancesmapping/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/filesuggest/": {
							"title": "FileSuggest",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/editorsuggest/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/interfaces/editorsuggestcontext/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/internals/interfaces/filesuggestmanager/",
								"api/namespaces/internals/interfaces/suggestioncontainer/",
								"api/namespaces/obsidian/interfaces/editorsuggesttriggerinfo/",
								"api/namespaces/obsidian/interfaces/editorposition/",
								"api/namespaces/obsidian/classes/editor/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/obsidian/interfaces/instruction/",
								"api/namespaces/obsidian/interfaces/searchresult/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/editorsuggest/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/editorsuggestcontext/": {
							"title": "EditorSuggestContext",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/editorsuggesttriggerinfo/",
								"api/namespaces/obsidian/classes/editor/",
								"api/namespaces/obsidian/interfaces/editorposition/",
								"api/namespaces/obsidian/classes/tfile/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/filesuggest/",
								"api/namespaces/obsidian/classes/editorsuggest/",
								"api/namespaces/obsidian/interfaces/editorsuggesttriggerinfo/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/filesuggestmanager/": {
							"title": "FileSuggestManager",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/internals/interfaces/runnable/",
								"api/namespaces/obsidian/interfaces/searchresult/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/obsidian/interfaces/blockcache/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/filesuggest/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/suggestioncontainer/": {
							"title": "SuggestionContainer",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/editorsuggest/",
								"api/namespaces/obsidian/interfaces/searchresult/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/filesuggest/",
								"api/namespaces/obsidian/classes/abstractinputsuggest/",
								"api/namespaces/obsidian/classes/editorsuggest/",
								"api/namespaces/obsidian/classes/popoversuggest/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/editorsuggesttriggerinfo/": {
							"title": "EditorSuggestTriggerInfo",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/editorsuggestcontext/",
								"api/namespaces/obsidian/interfaces/editorposition/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/filesuggest/",
								"api/namespaces/obsidian/classes/editorsuggest/",
								"api/namespaces/obsidian/interfaces/editorsuggestcontext/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/instruction/": {
							"title": "Instruction",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/internals/interfaces/filesuggest/",
								"api/namespaces/obsidian/classes/editorsuggest/",
								"api/namespaces/obsidian/classes/fuzzysuggestmodal/",
								"api/namespaces/obsidian/classes/suggestmodal/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/searchresult/": {
							"title": "SearchResult",
							"content": "",
							"links": [
								"api/namespaces/obsidian/type-aliases/searchmatches/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/filesuggest/",
								"api/namespaces/internals/interfaces/filesuggestmanager/",
								"api/namespaces/internals/interfaces/suggestioncontainer/",
								"api/namespaces/obsidian/classes/editorsuggest/",
								"api/namespaces/obsidian/functions/fuzzysearch/",
								"api/namespaces/obsidian/functions/preparefuzzysearch/",
								"api/namespaces/obsidian/functions/preparesimplesearch/",
								"api/namespaces/obsidian/functions/renderresults/",
								"api/namespaces/obsidian/interfaces/fuzzymatch/",
								"api/namespaces/obsidian/interfaces/searchresultcontainer/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/runnable/": {
							"title": "Runnable",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/internals/interfaces/filesuggestmanager/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/blockcache/": {
							"title": "BlockCache",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/cacheitem/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/interfaces/pos/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/filesuggestmanager/",
								"api/namespaces/obsidian/interfaces/blocksubpathresult/",
								"api/namespaces/obsidian/interfaces/cachedmetadata/",
								"api/namespaces/obsidian/interfaces/cacheitem/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/foldinfo/": {
							"title": "FoldInfo",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/internals/interfaces/iframedmarkdowneditor/",
								"api/namespaces/internals/interfaces/markdownbaseview/",
								"api/namespaces/internals/interfaces/markdownscrollableeditview/",
								"api/namespaces/internals/interfaces/tablecelleditor/",
								"api/namespaces/internals/interfaces/widgeteditorview/",
								"api/namespaces/obsidian/classes/markdowneditview/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/foldmanager/": {
							"title": "FoldManager",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/internals/interfaces/globalsearchleaf/": {
							"title": "GlobalSearchLeaf",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/workspacemobiledrawer/",
								"api/namespaces/obsidian/classes/workspacetabs/",
								"api/namespaces/obsidian/classes/view/",
								"api/namespaces/obsidian/classes/workspacecontainer/",
								"api\\namespaces\\obsidian\\classes\\workspaceroot/",
								"api\\namespaces\\obsidian\\classes\\workspacewindow/",
								"api/namespaces/obsidian/classes/workspaceitem/",
								"api/namespaces/obsidian/interfaces/viewstate/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/obsidian/interfaces/openviewstate/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/workspaceleaf/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/globalsearchplugininstance/": {
							"title": "GlobalSearchPluginInstance",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugin/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugins/",
								"api/namespaces/internals/type-aliases/internalpluginnameinstancesmapping/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/graphplugininstance/": {
							"title": "GraphPluginInstance",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugin/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugins/",
								"api/namespaces/internals/type-aliases/internalpluginnameinstancesmapping/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/graphview/": {
							"title": "GraphView",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/itemview/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/obsidian/classes/menu/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/",
								"api/namespaces/obsidian/interfaces/viewstateresult/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/itemview/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/hotkeymanager/": {
							"title": "HotkeyManager",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/interfaces/keymapinfo/",
								"api/namespaces/internals/interfaces/hotkeymanagercustomkeysrecord/",
								"api/namespaces/internals/interfaces/hotkeymanagerdefaultkeysrecord/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/app/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/keymapinfo/": {
							"title": "KeymapInfo",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/keymapcontext/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/hotkeymanager/",
								"api/namespaces/internals/interfaces/hotkeymanagercustomkeysrecord/",
								"api/namespaces/internals/interfaces/hotkeymanagerdefaultkeysrecord/",
								"api/namespaces/obsidian/interfaces/keymapcontext/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/hotkeymanagercustomkeysrecord/": {
							"title": "HotkeyManagerCustomKeysRecord",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/keymapinfo/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/hotkeymanager/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/hotkeymanagerdefaultkeysrecord/": {
							"title": "HotkeyManagerDefaultKeysRecord",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/keymapinfo/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/hotkeymanager/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/hotkeyssettingtab/": {
							"title": "HotkeysSettingTab",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/settingtab/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/plugin/",
								"api/namespaces/obsidian/classes/searchcomponent/",
								"api/namespaces/obsidian/classes/setting/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/setting/",
								"api/namespaces/obsidian/classes/settingtab/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/settingtab/": {
							"title": "SettingTab",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/pluginsettingtab/",
								"api/namespaces/internals/interfaces/hotkeyssettingtab/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/plugin/",
								"api/namespaces/obsidian/classes/setting/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/hotkeyssettingtab/",
								"api/namespaces/obsidian/classes/pluginsettingtab/",
								"api/namespaces/obsidian/classes/setting/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/plugin/": {
							"title": "Plugin",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/interfaces/pluginmanifest/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/interfaces/command/",
								"api\\namespaces\\obsidian\\functions\\addicon/",
								"api/namespaces/obsidian/classes/pluginsettingtab/",
								"api\\namespaces\\obsidian\\classes\\workspace\\",
								"api/namespaces/obsidian/classes/editorsuggest/",
								"api/namespaces/obsidian/interfaces/hoverlinksource/",
								"api/namespaces/obsidian/interfaces/markdownpostprocessor/",
								"api/namespaces/obsidian/type-aliases/obsidianprotocolhandler/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/",
								"api/namespaces/obsidian/type-aliases/viewcreator/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/hotkeyssettingtab/",
								"api/namespaces/internals/interfaces/plugins/",
								"api/namespaces/internals/interfaces/pluginspluginsrecord/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/classes/pluginsettingtab/",
								"api/namespaces/obsidian/classes/settingtab/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/searchcomponent/": {
							"title": "SearchComponent",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/abstracttextcomponent/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/hotkeyssettingtab/",
								"api/namespaces/obsidian/classes/abstracttextcomponent/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/setting/": {
							"title": "Setting",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/modal/",
								"api/namespaces/obsidian/classes/settingtab/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/basecomponent/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/internals/interfaces/hotkeyssettingtab/",
								"api/namespaces/obsidian/interfaces/tooltipoptions/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/hotkeyssettingtab/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/modal/",
								"api/namespaces/obsidian/classes/pluginsettingtab/",
								"api/namespaces/obsidian/classes/settingtab/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/hoverlinkevent/": {
							"title": "HoverLinkEvent",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/workspaceleaf/"
							],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/internals/interfaces/markdownscrollableeditview/": {
							"title": "MarkdownScrollableEditView",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/markdownbaseview/",
								"api/namespaces/obsidian/classes/markdowneditview/",
								"api/namespaces/internals/interfaces/iframedmarkdowneditor/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/internals/interfaces/clipboardmanager/",
								"api/namespaces/obsidian/classes/editor/",
								"api/namespaces/internals/interfaces/editorsuggests/",
								"api/namespaces/obsidian/interfaces/markdownfileinfo/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/internals/interfaces/editorsearchcomponent/",
								"api/namespaces/internals/interfaces/tablecelleditor/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/internals/interfaces/foldinfo/",
								"api/namespaces/internals/interfaces/tableeditor/",
								"api/namespaces/internals/interfaces/tablecell/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/",
								"api/namespaces/internals/interfaces/token/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/iframedmarkdowneditor/",
								"api/namespaces/internals/interfaces/markdownbaseview/",
								"api/namespaces/obsidian/classes/editor/",
								"api/namespaces/obsidian/classes/markdowneditview/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/markdownfileinfo/": {
							"title": "MarkdownFileInfo",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/hoverparent/",
								"api/namespaces/obsidian/classes/markdowneditview/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/editor/",
								"api/namespaces/obsidian/classes/hoverpopover/",
								"api/namespaces/obsidian/classes/tfile/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/iframedmarkdowneditor/",
								"api/namespaces/internals/interfaces/markdownbaseview/",
								"api/namespaces/internals/interfaces/markdownscrollableeditview/",
								"api/namespaces/internals/interfaces/tablecelleditor/",
								"api/namespaces/obsidian/classes/markdowneditview/",
								"api/namespaces/obsidian/classes/markdownview/",
								"api/namespaces/obsidian/classes/workspace/",
								"api/namespaces/obsidian/interfaces/command/",
								"api/namespaces/obsidian/interfaces/hoverparent/",
								"api/namespaces/obsidian/variables/editorinfofield/",
								"api/namespaces/obsidian/variables/editorviewfield/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/tablecelleditor/": {
							"title": "TableCellEditor",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/markdownbaseview/",
								"api/namespaces/internals/interfaces/tablecell/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/internals/interfaces/clipboardmanager/",
								"api/namespaces/obsidian/classes/editor/",
								"api/namespaces/internals/interfaces/editorsuggests/",
								"api/namespaces/obsidian/interfaces/markdownfileinfo/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/internals/interfaces/foldinfo/",
								"api/namespaces/internals/interfaces/tableeditor/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/",
								"api/namespaces/internals/interfaces/token/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/iframedmarkdowneditor/",
								"api/namespaces/internals/interfaces/markdownbaseview/",
								"api/namespaces/internals/interfaces/markdownscrollableeditview/",
								"api/namespaces/internals/interfaces/tablecell/",
								"api/namespaces/obsidian/classes/markdowneditview/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/tableeditor/": {
							"title": "TableEditor",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/internals/interfaces/iframedmarkdowneditor/",
								"api/namespaces/internals/interfaces/markdownbaseview/",
								"api/namespaces/internals/interfaces/markdownscrollableeditview/",
								"api/namespaces/internals/interfaces/tablecelleditor/",
								"api/namespaces/obsidian/classes/markdowneditview/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/tablecell/": {
							"title": "TableCell",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/tablecelleditor/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/iframedmarkdowneditor/",
								"api/namespaces/internals/interfaces/markdownbaseview/",
								"api/namespaces/internals/interfaces/markdownscrollableeditview/",
								"api/namespaces/internals/interfaces/tablecelleditor/",
								"api/namespaces/obsidian/classes/markdowneditview/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/imageview/": {
							"title": "ImageView",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/editablefileview/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/obsidian/classes/menu/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/",
								"api/namespaces/obsidian/interfaces/viewstateresult/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/editablefileview/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/infinityscroll/": {
							"title": "InfinityScroll",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/classes/fileview/": {
							"title": "FileView",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/itemview/",
								"api/namespaces/obsidian/classes/editablefileview/",
								"api/namespaces/internals/interfaces/infofileview/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/obsidian/classes/menu/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/",
								"api/namespaces/obsidian/interfaces/viewstateresult/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/infofileview/",
								"api/namespaces/obsidian/classes/editablefileview/",
								"api/namespaces/obsidian/classes/itemview/",
								"api/namespaces/obsidian/classes/workspace/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/localgraphview/": {
							"title": "LocalGraphView",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/infofileview/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/obsidian/classes/menu/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/",
								"api/namespaces/obsidian/interfaces/viewstateresult/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/infofileview/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/outgoinglinkview/": {
							"title": "OutgoingLinkView",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/infofileview/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/obsidian/classes/menu/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/",
								"api/namespaces/obsidian/interfaces/viewstateresult/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/infofileview/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/outlineview/": {
							"title": "OutlineView",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/infofileview/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/obsidian/classes/view/",
								"api/namespaces/obsidian/classes/menu/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/",
								"api/namespaces/obsidian/interfaces/viewstateresult/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/infofileview/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/markdownimporterplugininstance/": {
							"title": "MarkdownImporterPluginInstance",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugin/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugins/",
								"api/namespaces/internals/type-aliases/internalpluginnameinstancesmapping/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/notecomposerplugininstance/": {
							"title": "NoteComposerPluginInstance",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugin/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugins/",
								"api/namespaces/internals/type-aliases/internalpluginnameinstancesmapping/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/outgoinglinkplugininstance/": {
							"title": "OutgoingLinkPluginInstance",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugin/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugins/",
								"api/namespaces/internals/type-aliases/internalpluginnameinstancesmapping/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/outlineplugininstance/": {
							"title": "OutlinePluginInstance",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugin/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugins/",
								"api/namespaces/internals/type-aliases/internalpluginnameinstancesmapping/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/pagepreviewplugininstance/": {
							"title": "PagePreviewPluginInstance",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugin/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugins/",
								"api/namespaces/internals/type-aliases/internalpluginnameinstancesmapping/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/propertiesplugininstance/": {
							"title": "PropertiesPluginInstance",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugin/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugins/",
								"api/namespaces/internals/type-aliases/internalpluginnameinstancesmapping/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/publishplugininstance/": {
							"title": "PublishPluginInstance",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugin/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugins/",
								"api/namespaces/internals/type-aliases/internalpluginnameinstancesmapping/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/randomnoteplugininstance/": {
							"title": "RandomNotePluginInstance",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugin/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugins/",
								"api/namespaces/internals/type-aliases/internalpluginnameinstancesmapping/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/slashcommandplugininstance/": {
							"title": "SlashCommandPluginInstance",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugin/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugins/",
								"api/namespaces/internals/type-aliases/internalpluginnameinstancesmapping/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/slidesplugininstance/": {
							"title": "SlidesPluginInstance",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugin/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugins/",
								"api/namespaces/internals/type-aliases/internalpluginnameinstancesmapping/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/starredplugininstance/": {
							"title": "StarredPluginInstance",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugin/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugins/",
								"api/namespaces/internals/type-aliases/internalpluginnameinstancesmapping/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/switcherplugininstance/": {
							"title": "SwitcherPluginInstance",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugin/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugins/",
								"api/namespaces/internals/type-aliases/internalpluginnameinstancesmapping/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/syncplugininstance/": {
							"title": "SyncPluginInstance",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugin/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugins/",
								"api/namespaces/internals/type-aliases/internalpluginnameinstancesmapping/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/tagpaneplugininstance/": {
							"title": "TagPanePluginInstance",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugin/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugins/",
								"api/namespaces/internals/type-aliases/internalpluginnameinstancesmapping/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/templatesplugininstance/": {
							"title": "TemplatesPluginInstance",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugin/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugins/",
								"api/namespaces/internals/type-aliases/internalpluginnameinstancesmapping/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/wordcountplugininstance/": {
							"title": "WordCountPluginInstance",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugin/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugins/",
								"api/namespaces/internals/type-aliases/internalpluginnameinstancesmapping/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/workspacesplugininstance/": {
							"title": "WorkspacesPluginInstance",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugin/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugins/",
								"api/namespaces/internals/type-aliases/internalpluginnameinstancesmapping/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/zkprefixerplugininstance/": {
							"title": "ZkPrefixerPluginInstance",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugin/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/internals/interfaces/internalplugins/",
								"api/namespaces/internals/type-aliases/internalpluginnameinstancesmapping/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/internalplugins/": {
							"title": "InternalPlugins",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/events/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/internals/interfaces/internalpluginsconfigrecord/",
								"api/namespaces/internals/interfaces/internalplugin/",
								"api/namespaces/internals/interfaces/audiorecorderplugininstance/",
								"api/namespaces/internals/interfaces/backlinkplugininstance/",
								"api/namespaces/internals/interfaces/bookmarksplugininstance/",
								"api/namespaces/internals/interfaces/canvasplugininstance/",
								"api/namespaces/internals/interfaces/commandpaletteplugininstance/",
								"api/namespaces/internals/interfaces/dailynotesplugininstance/",
								"api/namespaces/internals/interfaces/editorstatusplugininstance/",
								"api/namespaces/internals/interfaces/fileexplorerplugininstance/",
								"api/namespaces/internals/interfaces/filerecoveryplugininstance/",
								"api/namespaces/internals/interfaces/globalsearchplugininstance/",
								"api/namespaces/internals/interfaces/graphplugininstance/",
								"api/namespaces/internals/interfaces/markdownimporterplugininstance/",
								"api/namespaces/internals/interfaces/notecomposerplugininstance/",
								"api/namespaces/internals/interfaces/outgoinglinkplugininstance/",
								"api/namespaces/internals/interfaces/outlineplugininstance/",
								"api/namespaces/internals/interfaces/pagepreviewplugininstance/",
								"api/namespaces/internals/interfaces/propertiesplugininstance/",
								"api/namespaces/internals/interfaces/publishplugininstance/",
								"api/namespaces/internals/interfaces/randomnoteplugininstance/",
								"api/namespaces/internals/interfaces/slashcommandplugininstance/",
								"api/namespaces/internals/interfaces/slidesplugininstance/",
								"api/namespaces/internals/interfaces/starredplugininstance/",
								"api/namespaces/internals/interfaces/switcherplugininstance/",
								"api/namespaces/internals/interfaces/syncplugininstance/",
								"api/namespaces/internals/interfaces/tagpaneplugininstance/",
								"api/namespaces/internals/interfaces/templatesplugininstance/",
								"api/namespaces/internals/interfaces/wordcountplugininstance/",
								"api/namespaces/internals/interfaces/workspacesplugininstance/",
								"api/namespaces/internals/interfaces/zkprefixerplugininstance/",
								"api/namespaces/internals/type-aliases/internalpluginnameinstancesmapping/",
								"api/namespaces/internals/type-aliases/internalpluginnametype/",
								"api/namespaces/internals/interfaces/internalplugininstance/",
								"api/namespaces/obsidian/interfaces/eventref/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/events/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/internalpluginsconfigrecord/": {
							"title": "InternalPluginsConfigRecord",
							"content": "",
							"links": [
								"api/namespaces/internals/type-aliases/internalpluginnametype/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/internalplugins/"
							],
							"tags": []
						},
						"api/namespaces/internals/type-aliases/internalpluginnameinstancesmapping/": {
							"title": "InternalPluginNameInstancesMapping",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/audiorecorderplugininstance/",
								"api/namespaces/internals/interfaces/backlinkplugininstance/",
								"api/namespaces/internals/interfaces/bookmarksplugininstance/",
								"api/namespaces/internals/interfaces/canvasplugininstance/",
								"api/namespaces/internals/interfaces/commandpaletteplugininstance/",
								"api/namespaces/internals/interfaces/dailynotesplugininstance/",
								"api/namespaces/internals/interfaces/editorstatusplugininstance/",
								"api/namespaces/internals/interfaces/fileexplorerplugininstance/",
								"api/namespaces/internals/interfaces/filerecoveryplugininstance/",
								"api/namespaces/internals/interfaces/globalsearchplugininstance/",
								"api/namespaces/internals/interfaces/graphplugininstance/",
								"api/namespaces/internals/interfaces/markdownimporterplugininstance/",
								"api/namespaces/internals/interfaces/notecomposerplugininstance/",
								"api/namespaces/internals/interfaces/outgoinglinkplugininstance/",
								"api/namespaces/internals/interfaces/outlineplugininstance/",
								"api/namespaces/internals/interfaces/pagepreviewplugininstance/",
								"api/namespaces/internals/interfaces/propertiesplugininstance/",
								"api/namespaces/internals/interfaces/publishplugininstance/",
								"api/namespaces/internals/interfaces/randomnoteplugininstance/",
								"api/namespaces/internals/interfaces/slashcommandplugininstance/",
								"api/namespaces/internals/interfaces/slidesplugininstance/",
								"api/namespaces/internals/interfaces/starredplugininstance/",
								"api/namespaces/internals/interfaces/switcherplugininstance/",
								"api/namespaces/internals/interfaces/syncplugininstance/",
								"api/namespaces/internals/interfaces/tagpaneplugininstance/",
								"api/namespaces/internals/interfaces/templatesplugininstance/",
								"api/namespaces/internals/interfaces/wordcountplugininstance/",
								"api/namespaces/internals/interfaces/workspacesplugininstance/",
								"api/namespaces/internals/interfaces/zkprefixerplugininstance/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/internalplugins/"
							],
							"tags": []
						},
						"api/namespaces/internals/type-aliases/internalpluginnametype/": {
							"title": "InternalPluginNameType",
							"content": "",
							"links": [
								"api/namespaces/internals/variables/internalpluginname/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/internalplugins/",
								"api/namespaces/internals/interfaces/internalpluginsconfigrecord/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/keyscope/": {
							"title": "KeyScope",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/scope/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/scope/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/leafentry/": {
							"title": "LeafEntry",
							"content": "",
							"links": [
								"api/namespaces/obsidian/type-aliases/splitdirection/",
								"api/namespaces/obsidian/interfaces/viewstate/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/serializedworkspace/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/type-aliases/splitdirection/": {
							"title": "SplitDirection",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/internals/interfaces/leafentry/",
								"api/namespaces/obsidian/classes/workspace/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/referencecache/": {
							"title": "ReferenceCache",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/reference/",
								"api/namespaces/obsidian/interfaces/cacheitem/",
								"api/namespaces/obsidian/interfaces/embedcache/",
								"api/namespaces/obsidian/interfaces/linkcache/",
								"api/namespaces/obsidian/interfaces/pos/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/linkchangeupdate/",
								"api/namespaces/obsidian/interfaces/cacheitem/",
								"api/namespaces/obsidian/interfaces/embedcache/",
								"api/namespaces/obsidian/interfaces/linkcache/",
								"api/namespaces/obsidian/interfaces/reference/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/linkupdate/": {
							"title": "LinkUpdate",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/internals/interfaces/positionedreference/",
								"api/namespaces/obsidian/classes/tfile/"
							],
							"backlinks": [
								"api/namespaces/internals/type-aliases/linkupdatehandler/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/positionedreference/": {
							"title": "PositionedReference",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/reference/",
								"api/namespaces/obsidian/interfaces/loc/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/linkupdate/",
								"api/namespaces/obsidian/interfaces/reference/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/linkupdaters/": {
							"title": "LinkUpdaters",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/linkupdater/",
								"api/namespaces/internals/interfaces/canvaslinkupdater/"
							],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/internals/interfaces/loadprogress/": {
							"title": "LoadProgress",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/classes/app/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/markdowneditview/": {
							"title": "MarkdownEditView",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/markdownsubview/",
								"api/namespaces/obsidian/interfaces/hoverparent/",
								"api/namespaces/obsidian/interfaces/markdownfileinfo/",
								"api/namespaces/internals/interfaces/markdownscrollableeditview/",
								"api/namespaces/obsidian/classes/markdownview/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/internals/interfaces/clipboardmanager/",
								"api/namespaces/obsidian/classes/editor/",
								"api/namespaces/internals/interfaces/editorsuggests/",
								"api/namespaces/obsidian/classes/hoverpopover/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/internals/interfaces/editorsearchcomponent/",
								"api/namespaces/internals/interfaces/tablecelleditor/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/internals/interfaces/foldinfo/",
								"api/namespaces/internals/interfaces/tableeditor/",
								"api/namespaces/internals/interfaces/tablecell/",
								"api/namespaces/obsidian/interfaces/editorrange/",
								"api/namespaces/obsidian/interfaces/editorselection/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/",
								"api/namespaces/internals/interfaces/token/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/markdownscrollableeditview/",
								"api/namespaces/obsidian/classes/markdownview/",
								"api/namespaces/obsidian/interfaces/hoverparent/",
								"api/namespaces/obsidian/interfaces/markdownfileinfo/",
								"api/namespaces/obsidian/interfaces/markdownsubview/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/menusubmenuconfigrecord/": {
							"title": "MenuSubmenuConfigRecord",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/internals/interfaces/metadatacachefilecacherecord/": {
							"title": "MetadataCacheFileCacheRecord",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/filecacheentry/"
							],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/internals/interfaces/metadatacachemetadatacacherecord/": {
							"title": "MetadataCacheMetadataCacheRecord",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/cachedmetadata/"
							],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/cachedmetadata/": {
							"title": "CachedMetadata",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/blockcache/",
								"api/namespaces/obsidian/interfaces/embedcache/",
								"api/namespaces/obsidian/interfaces/footnotecache/",
								"api/namespaces/obsidian/interfaces/frontmattercache/",
								"api/namespaces/obsidian/interfaces/frontmatterlinkcache/",
								"api/namespaces/obsidian/interfaces/pos/",
								"api/namespaces/obsidian/interfaces/headingcache/",
								"api/namespaces/obsidian/interfaces/linkcache/",
								"api/namespaces/obsidian/interfaces/listitemcache/",
								"api/namespaces/obsidian/interfaces/sectioncache/",
								"api/namespaces/obsidian/interfaces/tagcache/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/metadatacachemetadatacacherecord/",
								"api/namespaces/internals/interfaces/widgeteditorview/",
								"api/namespaces/obsidian/classes/metadatacache/",
								"api/namespaces/obsidian/functions/getalltags/",
								"api/namespaces/obsidian/functions/iteratecacherefs/",
								"api/namespaces/obsidian/functions/resolvesubpath/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/metadataeditorproperty/": {
							"title": "MetadataEditorProperty",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/internals/interfaces/propertyentrydata/",
								"api/namespaces/internals/interfaces/metadataeditor/",
								"api/namespaces/internals/interfaces/metadatawidget/",
								"api/namespaces/internals/interfaces/propertywidget/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/metadataeditor/",
								"api/namespaces/obsidian/classes/component/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/propertyentrydata/": {
							"title": "PropertyEntryData",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/internals/interfaces/metadataeditor/",
								"api/namespaces/internals/interfaces/metadataeditorproperty/",
								"api/namespaces/internals/interfaces/propertywidget/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/metadatawidget/": {
							"title": "MetadataWidget",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/internals/interfaces/metadataeditorproperty/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/propertywidget/": {
							"title": "PropertyWidget",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/internals/interfaces/propertyentrydata/",
								"api/namespaces/internals/interfaces/propertyrendercontext/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/metadataeditorproperty/",
								"api/namespaces/internals/interfaces/metadatatypemanagerregisteredtypewidgetsrecord/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/metadatatypemanager/": {
							"title": "MetadataTypeManager",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/events/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/internals/interfaces/metadatatypemanagerpropertiesrecord/",
								"api/namespaces/internals/interfaces/metadatatypemanagertypesrecord/",
								"api/namespaces/internals/interfaces/propertyinfo/",
								"api/namespaces/obsidian/interfaces/eventref/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/events/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/metadatatypemanagerpropertiesrecord/": {
							"title": "MetadataTypeManagerPropertiesRecord",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/propertyinfo/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/metadatatypemanager/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/metadatatypemanagertypesrecord/": {
							"title": "MetadataTypeManagerTypesRecord",
							"content": "",
							"links": [
								"api/namespaces/internals/type-aliases/propertywidgettype/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/metadatatypemanager/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/propertyinfo/": {
							"title": "PropertyInfo",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/internals/interfaces/metadatatypemanager/",
								"api/namespaces/internals/interfaces/metadatatypemanagerpropertiesrecord/",
								"api/namespaces/obsidian/classes/metadatacache/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/metadatatypemanagerregisteredtypewidgetsrecord/": {
							"title": "MetadataTypeManagerRegisteredTypeWidgetsRecord",
							"content": "",
							"links": [
								"api/namespaces/internals/type-aliases/propertywidgettype/",
								"api/namespaces/internals/interfaces/propertywidget/"
							],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/internals/type-aliases/propertywidgettype/": {
							"title": "PropertyWidgetType",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/internals/interfaces/metadatatypemanagerregisteredtypewidgetsrecord/",
								"api/namespaces/internals/interfaces/metadatatypemanagertypesrecord/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/mobilenavbar/": {
							"title": "MobileNavbar",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/internals/interfaces/mobiletoolbar/": {
							"title": "MobileToolbar",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/internals/interfaces/obsidiandom/": {
							"title": "ObsidianDOM",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/classes/app/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/obsidiantouchevent/": {
							"title": "ObsidianTouchEvent",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/internals/interfaces/pdfview/": {
							"title": "PdfView",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/editablefileview/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/obsidian/classes/menu/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/",
								"api/namespaces/obsidian/interfaces/viewstateresult/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/editablefileview/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/plugins/": {
							"title": "Plugins",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/internals/interfaces/pluginsmanifestsrecord/",
								"api/namespaces/internals/interfaces/pluginspluginsrecord/",
								"api/namespaces/internals/interfaces/pluginupdatemanifest/",
								"api/namespaces/obsidian/classes/plugin/",
								"api/namespaces/obsidian/interfaces/pluginmanifest/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/app/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/pluginsmanifestsrecord/": {
							"title": "PluginsManifestsRecord",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/pluginmanifest/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/plugins/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/pluginspluginsrecord/": {
							"title": "PluginsPluginsRecord",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/plugin/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/plugins/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/pluginupdatemanifest/": {
							"title": "PluginUpdateManifest",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/pluginmanifest/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/plugins/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/pluginmanifest/": {
							"title": "PluginManifest",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/internals/interfaces/plugins/",
								"api/namespaces/internals/interfaces/pluginsmanifestsrecord/",
								"api/namespaces/internals/interfaces/pluginupdatemanifest/",
								"api/namespaces/obsidian/classes/plugin/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/reference/": {
							"title": "Reference",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/frontmatterlinkcache/",
								"api/namespaces/obsidian/interfaces/referencecache/",
								"api/namespaces/internals/interfaces/positionedreference/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/positionedreference/",
								"api/namespaces/obsidian/classes/metadatacache/",
								"api/namespaces/obsidian/functions/iteraterefs/",
								"api/namespaces/obsidian/interfaces/frontmatterlinkcache/",
								"api/namespaces/obsidian/interfaces/referencecache/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/loc/": {
							"title": "Loc",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/internals/interfaces/positionedreference/",
								"api/namespaces/obsidian/interfaces/blocksubpathresult/",
								"api/namespaces/obsidian/interfaces/headingsubpathresult/",
								"api/namespaces/obsidian/interfaces/pos/",
								"api/namespaces/obsidian/interfaces/subpathresult/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/propertyrendercontext/": {
							"title": "PropertyRenderContext",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/internals/interfaces/metadataeditor/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/propertywidget/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/readviewrenderer/": {
							"title": "ReadViewRenderer",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/renderersection/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/markdownpreviewview/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/renderersection/": {
							"title": "RendererSection",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/internals/interfaces/readviewrenderer/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/recentfiletracker/": {
							"title": "RecentFileTracker",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/vault/",
								"api/namespaces/obsidian/classes/workspace/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/workspace/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/vault/": {
							"title": "Vault",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/events/",
								"api/namespaces/obsidian/interfaces/dataadapter/",
								"api/namespaces/internals/interfaces/appvaultconfig/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/obsidian/interfaces/datawriteoptions/",
								"api\\namespaces\\obsidian\\classes\\vault\\",
								"api/namespaces/obsidian/classes/tfolder/",
								"api/namespaces/obsidian/classes/tabstractfile/",
								"api/namespaces/internals/type-aliases/configitem/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api\\namespaces\\obsidian\\classes\\workspace\\"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/recentfiletracker/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/events/",
								"api/namespaces/obsidian/classes/filemanager/",
								"api/namespaces/obsidian/classes/metadatacache/",
								"api/namespaces/obsidian/classes/tabstractfile/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/obsidian/classes/tfolder/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/workspace/": {
							"title": "Workspace",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/events/",
								"api/namespaces/obsidian/interfaces/markdownfileinfo/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api\\namespaces\\obsidian\\classes\\workspace\\",
								"api/namespaces/obsidian/classes/workspacetabs/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/obsidian/classes/workspaceribbon/",
								"api/namespaces/obsidian/classes/workspacesidedock/",
								"api/namespaces/obsidian/classes/workspacemobiledrawer/",
								"api/namespaces/obsidian/type-aliases/obsidianprotocolhandler/",
								"api/namespaces/internals/interfaces/recentfiletracker/",
								"api/namespaces/obsidian/interfaces/debouncer/",
								"api/namespaces/obsidian/classes/workspaceroot/",
								"api/namespaces/internals/interfaces/statehistory/",
								"api/namespaces/obsidian/type-aliases/splitdirection/",
								"api/namespaces/obsidian/classes/workspacesplit/",
								"api/namespaces/obsidian/type-aliases/panetype/",
								"api/namespaces/obsidian/classes/fileview/",
								"api/namespaces/obsidian/classes/view/",
								"api/namespaces/obsidian/type-aliases/constructor/",
								"api/namespaces/internals/interfaces/fileexplorerleaf/",
								"api/namespaces/obsidian/classes/workspaceparent/",
								"alse",
								"api/namespaces/obsidian/classes/workspacewindow/",
								"api/namespaces/obsidian/interfaces/workspacewindowinitdata/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/interfaces/openviewstate/",
								"rue"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/recentfiletracker/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/events/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/releasenotesview/": {
							"title": "ReleaseNotesView",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/itemview/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/obsidian/classes/menu/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/",
								"api/namespaces/obsidian/interfaces/viewstateresult/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/itemview/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/searchview/": {
							"title": "SearchView",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/view/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/obsidian/classes/menu/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/",
								"api/namespaces/obsidian/interfaces/viewstateresult/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/view/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/serializedworkspace/": {
							"title": "SerializedWorkspace",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/leafentry/",
								"api/namespaces/internals/interfaces/serializedworkspaceleftribbonhiddenitemsrecord/"
							],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/internals/interfaces/serializedworkspaceleftribbonhiddenitemsrecord/": {
							"title": "SerializedWorkspaceLeftRibbonHiddenItemsRecord",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/internals/interfaces/serializedworkspace/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/statehistory/": {
							"title": "StateHistory",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/editorrange/",
								"api/namespaces/obsidian/interfaces/viewstate/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/workspace/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/tagview/": {
							"title": "TagView",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/view/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/obsidian/classes/menu/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/",
								"api/namespaces/obsidian/interfaces/viewstateresult/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/view/"
							],
							"tags": []
						},
						"api/namespaces/internals/type-aliases/treenode/": {
							"title": "TreeNode",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/internals/interfaces/tree/",
								"api/namespaces/internals/type-aliases/treeitem/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/vaultfilemaprecord/": {
							"title": "VaultFileMapRecord",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/tabstractfile/"
							],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/internals/interfaces/videoview/": {
							"title": "VideoView",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/editablefileview/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/obsidian/classes/menu/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/",
								"api/namespaces/obsidian/interfaces/viewstateresult/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/editablefileview/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/viewregistry/": {
							"title": "ViewRegistry",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/events/",
								"api/namespaces/internals/interfaces/viewregistrytypebyextensionrecord/",
								"api/namespaces/internals/interfaces/viewregistryviewbytyperecord/",
								"api/namespaces/obsidian/classes/view/",
								"api/namespaces/obsidian/classes/workspaceleaf/",
								"api/namespaces/obsidian/interfaces/eventref/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/events/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/viewregistrytypebyextensionrecord/": {
							"title": "ViewRegistryTypeByExtensionRecord",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/internals/interfaces/viewregistry/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/viewregistryviewbytyperecord/": {
							"title": "ViewRegistryViewByTypeRecord",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/view/"
							],
							"backlinks": [
								"api/namespaces/internals/interfaces/viewregistry/"
							],
							"tags": []
						},
						"api/namespaces/internals/interfaces/windowselection/": {
							"title": "WindowSelection",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/internals/interfaces/workspacehoverlinksourcesrecord/": {
							"title": "WorkspaceHoverLinkSourcesRecord",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/hoverlinksource/"
							],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/hoverlinksource/": {
							"title": "HoverLinkSource",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/internals/interfaces/workspacehoverlinksourcesrecord/",
								"api/namespaces/obsidian/classes/plugin/"
							],
							"tags": []
						},
						"api/namespaces/internals/type-aliases/configitem/": {
							"title": "ConfigItem",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/classes/vault/"
							],
							"tags": []
						},
						"api/namespaces/internals/variables/internalpluginname/": {
							"title": "InternalPluginName",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/internals/type-aliases/internalpluginnametype/"
							],
							"tags": []
						},
						"api/namespaces/internals/type-aliases/linkupdatehandler/": {
							"title": "LinkUpdateHandler",
							"content": "",
							"links": [
								"api/namespaces/internals/interfaces/linkupdate/"
							],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/classes/abstractinputsuggest/": {
							"title": "AbstractInputSuggest",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/popoversuggest/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/internals/interfaces/suggestioncontainer/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/popoversuggest/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/popoversuggest/": {
							"title": "PopoverSuggest",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/isuggestowner/",
								"api/namespaces/obsidian/interfaces/closeablecomponent/",
								"api/namespaces/obsidian/classes/abstractinputsuggest/",
								"api/namespaces/obsidian/classes/editorsuggest/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/internals/interfaces/suggestioncontainer/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/abstractinputsuggest/",
								"api/namespaces/obsidian/classes/editorsuggest/",
								"api/namespaces/obsidian/interfaces/closeablecomponent/",
								"api/namespaces/obsidian/interfaces/isuggestowner/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/abstracttextcomponent/": {
							"title": "AbstractTextComponent",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/valuecomponent/",
								"api/namespaces/obsidian/classes/searchcomponent/",
								"api/namespaces/obsidian/classes/textareacomponent/",
								"api/namespaces/obsidian/classes/textcomponent/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/searchcomponent/",
								"api/namespaces/obsidian/classes/textareacomponent/",
								"api/namespaces/obsidian/classes/textcomponent/",
								"api/namespaces/obsidian/classes/valuecomponent/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/valuecomponent/": {
							"title": "ValueComponent",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/basecomponent/",
								"api/namespaces/obsidian/classes/abstracttextcomponent/",
								"api/namespaces/obsidian/classes/colorcomponent/",
								"api/namespaces/obsidian/classes/dropdowncomponent/",
								"api/namespaces/obsidian/classes/progressbarcomponent/",
								"api/namespaces/obsidian/classes/slidercomponent/",
								"api/namespaces/obsidian/classes/togglecomponent/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/abstracttextcomponent/",
								"api/namespaces/obsidian/classes/basecomponent/",
								"api/namespaces/obsidian/classes/colorcomponent/",
								"api/namespaces/obsidian/classes/dropdowncomponent/",
								"api/namespaces/obsidian/classes/progressbarcomponent/",
								"api/namespaces/obsidian/classes/slidercomponent/",
								"api/namespaces/obsidian/classes/togglecomponent/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/textareacomponent/": {
							"title": "TextAreaComponent",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/abstracttextcomponent/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/abstracttextcomponent/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/textcomponent/": {
							"title": "TextComponent",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/abstracttextcomponent/",
								"api/namespaces/obsidian/classes/momentformatcomponent/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/abstracttextcomponent/",
								"api/namespaces/obsidian/classes/momentformatcomponent/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/filemanager/": {
							"title": "FileManager",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/vault/",
								"api/namespaces/obsidian/type-aliases/panetype/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/obsidian/classes/tfolder/",
								"api/namespaces/obsidian/interfaces/datawriteoptions/",
								"api/namespaces/obsidian/classes/tabstractfile/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/app/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/keymap/": {
							"title": "Keymap",
							"content": "",
							"links": [
								"api\\namespaces\\obsidian\\classes\\scope/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/obsidian/type-aliases/panetype/",
								"api/namespaces/obsidian/type-aliases/userevent/",
								"api/namespaces/obsidian/type-aliases/modifier/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/app/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/type-aliases/userevent/": {
							"title": "UserEvent",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/keymap/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/metadatacache/": {
							"title": "MetadataCache",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/events/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/vault/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/internals/interfaces/propertyinfo/",
								"api/namespaces/internals/interfaces/customarraydict/",
								"api/namespaces/obsidian/interfaces/linkcache/",
								"api/namespaces/obsidian/interfaces/cachedmetadata/",
								"api/namespaces/internals/interfaces/filecacheentry/",
								"api/namespaces/obsidian/interfaces/reference/",
								"api/namespaces/obsidian/interfaces/eventref/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/events/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/basecomponent/": {
							"title": "BaseComponent",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/buttoncomponent/",
								"api/namespaces/obsidian/classes/extrabuttoncomponent/",
								"api/namespaces/obsidian/classes/valuecomponent/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/buttoncomponent/",
								"api/namespaces/obsidian/classes/extrabuttoncomponent/",
								"api/namespaces/obsidian/classes/setting/",
								"api/namespaces/obsidian/classes/valuecomponent/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/buttoncomponent/": {
							"title": "ButtonComponent",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/basecomponent/",
								"api/namespaces/obsidian/interfaces/tooltipoptions/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/basecomponent/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/extrabuttoncomponent/": {
							"title": "ExtraButtonComponent",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/basecomponent/",
								"api\\namespaces\\obsidian\\functions\\addicon/",
								"api/namespaces/obsidian/interfaces/tooltipoptions/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/basecomponent/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/tooltipoptions/": {
							"title": "TooltipOptions",
							"content": "",
							"links": [
								"api/namespaces/obsidian/type-aliases/tooltipplacement/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/buttoncomponent/",
								"api/namespaces/obsidian/classes/extrabuttoncomponent/",
								"api/namespaces/obsidian/classes/setting/",
								"api/namespaces/obsidian/classes/togglecomponent/",
								"api/namespaces/obsidian/functions/settooltip/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/colorcomponent/": {
							"title": "ColorComponent",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/valuecomponent/",
								"api/namespaces/obsidian/interfaces/hsl/",
								"api/namespaces/obsidian/interfaces/rgb/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/valuecomponent/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/hsl/": {
							"title": "HSL",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/classes/colorcomponent/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/rgb/": {
							"title": "RGB",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/classes/colorcomponent/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/markdownpreviewevents/": {
							"title": "MarkdownPreviewEvents",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/classes/markdownpreviewview/",
								"api/namespaces/obsidian/classes/markdownrenderer/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/classes/markdownpreviewview/",
								"api/namespaces/obsidian/classes/markdownrenderer/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/markdownrenderchild/": {
							"title": "MarkdownRenderChild",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/classes/markdownrenderer/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/classes/markdownrenderer/",
								"api/namespaces/obsidian/interfaces/markdownpostprocessorcontext/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/dropdowncomponent/": {
							"title": "DropdownComponent",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/valuecomponent/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/valuecomponent/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/editorselection/": {
							"title": "EditorSelection",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/editorposition/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/editor/",
								"api/namespaces/obsidian/classes/markdowneditview/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/type-aliases/editorcommandname/": {
							"title": "EditorCommandName",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/classes/editor/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/editorselectionorcaret/": {
							"title": "EditorSelectionOrCaret",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/editorposition/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/editor/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/editortransaction/": {
							"title": "EditorTransaction",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/editorchange/",
								"api/namespaces/obsidian/interfaces/editorrangeorcaret/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/editor/"
							],
							"tags": []
						},
						"api\\namespaces\\obsidian\\functions\\addicon/": {
							"title": "",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/classes/extrabuttoncomponent/",
								"api/namespaces/obsidian/classes/menuitem/",
								"api/namespaces/obsidian/classes/plugin/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/datawriteoptions/": {
							"title": "DataWriteOptions",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/classes/filemanager/",
								"api/namespaces/obsidian/classes/filesystemadapter/",
								"api/namespaces/obsidian/classes/vault/",
								"api/namespaces/obsidian/interfaces/dataadapter/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/filesystemadapter/": {
							"title": "FileSystemAdapter",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/dataadapter/",
								"api/namespaces/internals/interfaces/dataadapterfilesrecord/",
								"api/namespaces/obsidian/interfaces/datawriteoptions/",
								"api/namespaces/obsidian/interfaces/listedfiles/",
								"api/namespaces/obsidian/interfaces/stat/"
							],
							"backlinks": [
								"api/namespaces/obsidian/interfaces/dataadapter/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/dataadapter/": {
							"title": "DataAdapter",
							"content": "",
							"links": [
								"api\\namespaces\\obsidian\\classes\\vault/",
								"api/namespaces/obsidian/classes/filesystemadapter/",
								"api/namespaces/internals/interfaces/dataadapterfilesrecord/",
								"api\\namespaces\\obsidian\\functions\\normalizepath/",
								"api/namespaces/obsidian/interfaces/datawriteoptions/",
								"api/namespaces/obsidian/interfaces/listedfiles/",
								"api/namespaces/obsidian/interfaces/stat/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/filesystemadapter/",
								"api/namespaces/obsidian/classes/vault/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/listedfiles/": {
							"title": "ListedFiles",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/classes/filesystemadapter/",
								"api/namespaces/obsidian/interfaces/dataadapter/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/stat/": {
							"title": "Stat",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/classes/filesystemadapter/",
								"api/namespaces/obsidian/interfaces/dataadapter/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/fuzzysuggestmodal/": {
							"title": "FuzzySuggestModal",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/suggestmodal/",
								"api/namespaces/obsidian/interfaces/fuzzymatch/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/obsidian/interfaces/instruction/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/suggestmodal/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/suggestmodal/": {
							"title": "SuggestModal",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/modal/",
								"api/namespaces/obsidian/interfaces/isuggestowner/",
								"api/namespaces/obsidian/classes/fuzzysuggestmodal/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/obsidian/interfaces/instruction/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/fuzzysuggestmodal/",
								"api/namespaces/obsidian/classes/modal/",
								"api/namespaces/obsidian/interfaces/isuggestowner/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/fuzzymatch/": {
							"title": "FuzzyMatch",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/searchresult/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/fuzzysuggestmodal/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/hoverparent/": {
							"title": "HoverParent",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/markdowneditview/",
								"api/namespaces/obsidian/interfaces/markdownfileinfo/",
								"api/namespaces/obsidian/classes/markdownrenderer/",
								"api/namespaces/obsidian/classes/hoverpopover/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/hoverpopover/",
								"api/namespaces/obsidian/classes/markdowneditview/",
								"api/namespaces/obsidian/classes/markdownrenderer/",
								"api/namespaces/obsidian/interfaces/markdownfileinfo/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/enumerations/popoverstate/": {
							"title": "PopoverState",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/classes/hoverpopover/"
							],
							"tags": []
						},
						"api\\namespaces\\obsidian\\classes\\scope/": {
							"title": "",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/classes/keymap/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/type-aliases/modifier/": {
							"title": "Modifier",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/classes/keymap/",
								"api/namespaces/obsidian/classes/scope/",
								"api/namespaces/obsidian/interfaces/hotkey/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/markdownsubview/": {
							"title": "MarkdownSubView",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/markdowneditview/",
								"api/namespaces/obsidian/classes/markdownpreviewview/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/markdowneditview/",
								"api/namespaces/obsidian/classes/markdownpreviewview/",
								"api/namespaces/obsidian/classes/markdownview/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/markdownpreviewrenderer/": {
							"title": "MarkdownPreviewRenderer",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/markdownpostprocessorcontext/",
								"api/namespaces/obsidian/interfaces/markdownpostprocessor/"
							],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/markdownpostprocessorcontext/": {
							"title": "MarkdownPostProcessorContext",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/markdownrenderchild/",
								"api/namespaces/obsidian/interfaces/markdownsectioninformation/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/markdownpreviewrenderer/",
								"api/namespaces/obsidian/interfaces/markdownpostprocessor/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/markdownpostprocessor/": {
							"title": "MarkdownPostProcessor",
							"content": "",
							"links": [
								"api\\namespaces\\obsidian\\interfaces\\markdownpostprocessorcontext\\",
								"api/namespaces/obsidian/interfaces/markdownpostprocessorcontext/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/markdownpreviewrenderer/",
								"api/namespaces/obsidian/classes/plugin/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/markdownrenderer/": {
							"title": "MarkdownRenderer",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/markdownrenderchild/",
								"api/namespaces/obsidian/interfaces/markdownpreviewevents/",
								"api/namespaces/obsidian/interfaces/hoverparent/",
								"api/namespaces/obsidian/classes/markdownpreviewview/",
								"api/namespaces/obsidian/classes/component/",
								"api/namespaces/obsidian/interfaces/eventref/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/hoverpopover/",
								"api/namespaces/obsidian/classes/tfile/",
								"api/namespaces/obsidian/interfaces/keymapeventhandler/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/markdownpreviewview/",
								"api/namespaces/obsidian/classes/markdownrenderchild/",
								"api/namespaces/obsidian/interfaces/hoverparent/",
								"api/namespaces/obsidian/interfaces/markdownpreviewevents/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/type-aliases/markdownviewmodetype/": {
							"title": "MarkdownViewModeType",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/classes/markdownview/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/closeablecomponent/": {
							"title": "CloseableComponent",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/menu/",
								"api/namespaces/obsidian/classes/modal/",
								"api/namespaces/obsidian/classes/popoversuggest/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/menu/",
								"api/namespaces/obsidian/classes/modal/",
								"api/namespaces/obsidian/classes/popoversuggest/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/menuitem/": {
							"title": "MenuItem",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/menu/",
								"api\\namespaces\\obsidian\\functions\\addicon/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/menu/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/menupositiondef/": {
							"title": "MenuPositionDef",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/classes/menu/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/menuseparator/": {
							"title": "MenuSeparator",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/linkcache/": {
							"title": "LinkCache",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/referencecache/",
								"api/namespaces/obsidian/interfaces/pos/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/metadatacache/",
								"api/namespaces/obsidian/interfaces/cachedmetadata/",
								"api/namespaces/obsidian/interfaces/referencecache/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/modal/": {
							"title": "Modal",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/closeablecomponent/",
								"api/namespaces/obsidian/classes/setting/",
								"api/namespaces/obsidian/classes/suggestmodal/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/scope/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/setting/",
								"api/namespaces/obsidian/classes/suggestmodal/",
								"api/namespaces/obsidian/interfaces/closeablecomponent/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/momentformatcomponent/": {
							"title": "MomentFormatComponent",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/textcomponent/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/textcomponent/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/notice/": {
							"title": "Notice",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/classes/pluginsettingtab/": {
							"title": "PluginSettingTab",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/settingtab/",
								"api/namespaces/obsidian/classes/app/",
								"api/namespaces/obsidian/classes/plugin/",
								"api/namespaces/obsidian/classes/setting/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/plugin/",
								"api/namespaces/obsidian/classes/settingtab/"
							],
							"tags": []
						},
						"api\\namespaces\\obsidian\\classes\\workspace\\": {
							"title": "api\\namespaces\\obsidian\\classes\\workspace\\",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/classes/plugin/",
								"api/namespaces/obsidian/classes/vault/",
								"api/namespaces/obsidian/classes/workspace/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/type-aliases/obsidianprotocolhandler/": {
							"title": "ObsidianProtocolHandler",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/obsidianprotocoldata/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/plugin/",
								"api/namespaces/obsidian/classes/workspace/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/type-aliases/viewcreator/": {
							"title": "ViewCreator",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/view/",
								"api/namespaces/obsidian/classes/workspaceleaf/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/plugin/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/isuggestowner/": {
							"title": "ISuggestOwner",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/popoversuggest/",
								"api/namespaces/obsidian/classes/suggestmodal/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/popoversuggest/",
								"api/namespaces/obsidian/classes/suggestmodal/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/progressbarcomponent/": {
							"title": "ProgressBarComponent",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/valuecomponent/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/valuecomponent/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/type-aliases/keymapeventlistener/": {
							"title": "KeymapEventListener",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/keymapcontext/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/scope/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/slidercomponent/": {
							"title": "SliderComponent",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/valuecomponent/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/valuecomponent/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/tasks/": {
							"title": "Tasks",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/filestats/": {
							"title": "FileStats",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/classes/tfile/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/togglecomponent/": {
							"title": "ToggleComponent",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/valuecomponent/",
								"api/namespaces/obsidian/interfaces/tooltipoptions/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/valuecomponent/"
							],
							"tags": []
						},
						"api\\namespaces\\obsidian\\classes\\vault\\": {
							"title": "api\\namespaces\\obsidian\\classes\\vault\\",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/classes/vault/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/workspaceribbon/": {
							"title": "WorkspaceRibbon",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/classes/workspace/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/workspacesidedock/": {
							"title": "WorkspaceSidedock",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/workspacesplit/",
								"api/namespaces/obsidian/classes/workspaceparent/",
								"api/namespaces/obsidian/classes/workspacecontainer/",
								"api\\namespaces\\obsidian\\classes\\workspaceroot/",
								"api\\namespaces\\obsidian\\classes\\workspacewindow/",
								"api/namespaces/obsidian/classes/workspaceitem/",
								"api/namespaces/obsidian/interfaces/eventref/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/workspace/",
								"api/namespaces/obsidian/classes/workspacesplit/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/debouncer/": {
							"title": "Debouncer",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/classes/workspace/",
								"api/namespaces/obsidian/functions/debounce/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/workspaceroot/": {
							"title": "WorkspaceRoot",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/workspacecontainer/",
								"api/namespaces/obsidian/classes/workspaceparent/",
								"api\\namespaces\\obsidian\\classes\\workspaceroot/",
								"api\\namespaces\\obsidian\\classes\\workspacewindow/",
								"api/namespaces/obsidian/classes/workspaceitem/",
								"api/namespaces/obsidian/interfaces/eventref/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/workspace/",
								"api/namespaces/obsidian/classes/workspacecontainer/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/workspacesplit/": {
							"title": "WorkspaceSplit",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/workspaceparent/",
								"api/namespaces/obsidian/classes/workspacecontainer/",
								"api/namespaces/obsidian/classes/workspacesidedock/",
								"api\\namespaces\\obsidian\\classes\\workspaceroot/",
								"api\\namespaces\\obsidian\\classes\\workspacewindow/",
								"api/namespaces/obsidian/classes/workspaceitem/",
								"api/namespaces/obsidian/interfaces/eventref/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/workspace/",
								"api/namespaces/obsidian/classes/workspacecontainer/",
								"api/namespaces/obsidian/classes/workspaceparent/",
								"api/namespaces/obsidian/classes/workspacesidedock/",
								"api/namespaces/obsidian/classes/workspacetabs/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/type-aliases/constructor/": {
							"title": "Constructor",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/classes/workspace/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/workspaceparent/": {
							"title": "WorkspaceParent",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/workspaceitem/",
								"api/namespaces/obsidian/classes/workspacefloating/",
								"api/namespaces/obsidian/classes/workspacemobiledrawer/",
								"api/namespaces/obsidian/classes/workspacesplit/",
								"api/namespaces/obsidian/classes/workspacetabs/",
								"api/namespaces/obsidian/classes/workspacecontainer/",
								"api\\namespaces\\obsidian\\classes\\workspaceroot/",
								"api\\namespaces\\obsidian\\classes\\workspacewindow/",
								"api/namespaces/obsidian/interfaces/eventref/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/workspace/",
								"api/namespaces/obsidian/classes/workspacecontainer/",
								"api/namespaces/obsidian/classes/workspacefloating/",
								"api/namespaces/obsidian/classes/workspaceitem/",
								"api/namespaces/obsidian/classes/workspacemobiledrawer/",
								"api/namespaces/obsidian/classes/workspaceroot/",
								"api/namespaces/obsidian/classes/workspacesidedock/",
								"api/namespaces/obsidian/classes/workspacesplit/",
								"api/namespaces/obsidian/classes/workspacetabs/",
								"api/namespaces/obsidian/classes/workspacewindow/"
							],
							"tags": []
						},
						"alse": {
							"title": "alse",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/classes/workspace/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/workspacewindow/": {
							"title": "WorkspaceWindow",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/workspacecontainer/",
								"api/namespaces/obsidian/classes/workspaceparent/",
								"api\\namespaces\\obsidian\\classes\\workspaceroot/",
								"api\\namespaces\\obsidian\\classes\\workspacewindow/",
								"api/namespaces/obsidian/classes/workspaceitem/",
								"api/namespaces/obsidian/interfaces/eventref/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/workspace/",
								"api/namespaces/obsidian/classes/workspacecontainer/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/workspacewindowinitdata/": {
							"title": "WorkspaceWindowInitData",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/classes/workspace/"
							],
							"tags": []
						},
						"rue": {
							"title": "rue",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/classes/workspace/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/classes/workspacefloating/": {
							"title": "WorkspaceFloating",
							"content": "",
							"links": [
								"api/namespaces/obsidian/classes/workspaceparent/",
								"api/namespaces/obsidian/classes/workspacecontainer/",
								"api\\namespaces\\obsidian\\classes\\workspaceroot/",
								"api\\namespaces\\obsidian\\classes\\workspacewindow/",
								"api/namespaces/obsidian/classes/workspaceitem/",
								"api/namespaces/obsidian/interfaces/eventref/"
							],
							"backlinks": [
								"api/namespaces/obsidian/classes/workspaceparent/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/functions/addicon/": {
							"title": "addIcon",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/functions/arraybuffertobase64/": {
							"title": "arrayBufferToBase64",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/functions/arraybuffertohex/": {
							"title": "arrayBufferToHex",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/functions/base64toarraybuffer/": {
							"title": "base64ToArrayBuffer",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/functions/debounce/": {
							"title": "debounce",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/debouncer/"
							],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/functions/finishrendermath/": {
							"title": "finishRenderMath",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/functions/fuzzysearch/": {
							"title": "fuzzySearch",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/searchresult/",
								"api/namespaces/obsidian/interfaces/preparedquery/"
							],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/preparedquery/": {
							"title": "PreparedQuery",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/functions/fuzzysearch/",
								"api/namespaces/obsidian/functions/preparequery/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/functions/getalltags/": {
							"title": "getAllTags",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/cachedmetadata/"
							],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/functions/getblobarraybuffer/": {
							"title": "getBlobArrayBuffer",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/functions/getfrontmatterinfo/": {
							"title": "getFrontMatterInfo",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/frontmatterinfo/"
							],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/frontmatterinfo/": {
							"title": "FrontMatterInfo",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/functions/getfrontmatterinfo/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/functions/geticon/": {
							"title": "getIcon",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/functions/geticonids/": {
							"title": "getIconIds",
							"content": "",
							"links": [
								"api/namespaces/obsidian/type-aliases/iconname/"
							],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/type-aliases/iconname/": {
							"title": "IconName",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/functions/geticonids/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/functions/getlinkpath/": {
							"title": "getLinkpath",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/functions/hextoarraybuffer/": {
							"title": "hexToArrayBuffer",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/functions/htmltomarkdown/": {
							"title": "htmlToMarkdown",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/functions/iteratecacherefs/": {
							"title": "iterateCacheRefs",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/cachedmetadata/"
							],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/functions/iteraterefs/": {
							"title": "iterateRefs",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/reference/"
							],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/functions/loadmathjax/": {
							"title": "loadMathJax",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/functions/loadmermaid/": {
							"title": "loadMermaid",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/functions/loadpdfjs/": {
							"title": "loadPdfJs",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/functions/loadprism/": {
							"title": "loadPrism",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/functions/normalizepath/": {
							"title": "normalizePath",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/functions/parsefrontmatteraliases/": {
							"title": "parseFrontMatterAliases",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/functions/parsefrontmatterentry/": {
							"title": "parseFrontMatterEntry",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/functions/parsefrontmatterstringarray/": {
							"title": "parseFrontMatterStringArray",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/functions/parsefrontmattertags/": {
							"title": "parseFrontMatterTags",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/functions/parselinktext/": {
							"title": "parseLinktext",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/functions/parseyaml/": {
							"title": "parseYaml",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/functions/preparefuzzysearch/": {
							"title": "prepareFuzzySearch",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/searchresult/"
							],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/functions/preparequery/": {
							"title": "prepareQuery",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/preparedquery/"
							],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/functions/preparesimplesearch/": {
							"title": "prepareSimpleSearch",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/searchresult/"
							],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/functions/removeicon/": {
							"title": "removeIcon",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/functions/rendermatches/": {
							"title": "renderMatches",
							"content": "",
							"links": [
								"api/namespaces/obsidian/type-aliases/searchmatches/"
							],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/type-aliases/searchmatches/": {
							"title": "SearchMatches",
							"content": "",
							"links": [
								"api/namespaces/obsidian/type-aliases/searchmatchpart/"
							],
							"backlinks": [
								"api/namespaces/obsidian/functions/rendermatches/",
								"api/namespaces/obsidian/interfaces/searchresult/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/functions/rendermath/": {
							"title": "renderMath",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/functions/renderresults/": {
							"title": "renderResults",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/searchresult/"
							],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/functions/request/": {
							"title": "request",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/requesturlparam/"
							],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/requesturlparam/": {
							"title": "RequestUrlParam",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/functions/request/",
								"api/namespaces/obsidian/functions/requesturl/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/functions/requesturl/": {
							"title": "requestUrl",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/requesturlresponsepromise/",
								"api/namespaces/obsidian/interfaces/requesturlparam/"
							],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/requesturlresponsepromise/": {
							"title": "RequestUrlResponsePromise",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/requesturlresponse/"
							],
							"backlinks": [
								"api/namespaces/obsidian/functions/requesturl/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/functions/requireapiversion/": {
							"title": "requireApiVersion",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/functions/resolvesubpath/": {
							"title": "resolveSubpath",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/headingsubpathresult/",
								"api/namespaces/obsidian/interfaces/blocksubpathresult/",
								"api/namespaces/obsidian/interfaces/cachedmetadata/"
							],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/headingsubpathresult/": {
							"title": "HeadingSubpathResult",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/subpathresult/",
								"api/namespaces/obsidian/interfaces/headingcache/",
								"api/namespaces/obsidian/interfaces/loc/"
							],
							"backlinks": [
								"api/namespaces/obsidian/functions/resolvesubpath/",
								"api/namespaces/obsidian/interfaces/subpathresult/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/blocksubpathresult/": {
							"title": "BlockSubpathResult",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/subpathresult/",
								"api/namespaces/obsidian/interfaces/blockcache/",
								"api/namespaces/obsidian/interfaces/loc/",
								"api/namespaces/obsidian/interfaces/listitemcache/"
							],
							"backlinks": [
								"api/namespaces/obsidian/functions/resolvesubpath/",
								"api/namespaces/obsidian/interfaces/subpathresult/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/functions/sanitizehtmltodom/": {
							"title": "sanitizeHTMLToDom",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/functions/seticon/": {
							"title": "setIcon",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/functions/settooltip/": {
							"title": "setTooltip",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/tooltipoptions/"
							],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/functions/sortsearchresults/": {
							"title": "sortSearchResults",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/searchresultcontainer/"
							],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/searchresultcontainer/": {
							"title": "SearchResultContainer",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/searchresult/"
							],
							"backlinks": [
								"api/namespaces/obsidian/functions/sortsearchresults/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/functions/stringifyyaml/": {
							"title": "stringifyYaml",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/functions/stripheading/": {
							"title": "stripHeading",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/functions/stripheadingforlink/": {
							"title": "stripHeadingForLink",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/cacheitem/": {
							"title": "CacheItem",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/blockcache/",
								"api/namespaces/obsidian/interfaces/footnotecache/",
								"api/namespaces/obsidian/interfaces/headingcache/",
								"api/namespaces/obsidian/interfaces/listitemcache/",
								"api/namespaces/obsidian/interfaces/referencecache/",
								"api/namespaces/obsidian/interfaces/sectioncache/",
								"api/namespaces/obsidian/interfaces/tagcache/",
								"api/namespaces/obsidian/interfaces/pos/"
							],
							"backlinks": [
								"api/namespaces/obsidian/interfaces/blockcache/",
								"api/namespaces/obsidian/interfaces/footnotecache/",
								"api/namespaces/obsidian/interfaces/headingcache/",
								"api/namespaces/obsidian/interfaces/listitemcache/",
								"api/namespaces/obsidian/interfaces/referencecache/",
								"api/namespaces/obsidian/interfaces/sectioncache/",
								"api/namespaces/obsidian/interfaces/tagcache/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/pos/": {
							"title": "Pos",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/loc/"
							],
							"backlinks": [
								"api/namespaces/obsidian/interfaces/blockcache/",
								"api/namespaces/obsidian/interfaces/cachedmetadata/",
								"api/namespaces/obsidian/interfaces/cacheitem/",
								"api/namespaces/obsidian/interfaces/embedcache/",
								"api/namespaces/obsidian/interfaces/footnotecache/",
								"api/namespaces/obsidian/interfaces/headingcache/",
								"api/namespaces/obsidian/interfaces/linkcache/",
								"api/namespaces/obsidian/interfaces/listitemcache/",
								"api/namespaces/obsidian/interfaces/referencecache/",
								"api/namespaces/obsidian/interfaces/sectioncache/",
								"api/namespaces/obsidian/interfaces/tagcache/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/subpathresult/": {
							"title": "SubpathResult",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/blocksubpathresult/",
								"api/namespaces/obsidian/interfaces/headingsubpathresult/",
								"api/namespaces/obsidian/interfaces/loc/"
							],
							"backlinks": [
								"api/namespaces/obsidian/interfaces/blocksubpathresult/",
								"api/namespaces/obsidian/interfaces/headingsubpathresult/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/listitemcache/": {
							"title": "ListItemCache",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/cacheitem/",
								"api/namespaces/obsidian/interfaces/pos/"
							],
							"backlinks": [
								"api/namespaces/obsidian/interfaces/blocksubpathresult/",
								"api/namespaces/obsidian/interfaces/cachedmetadata/",
								"api/namespaces/obsidian/interfaces/cacheitem/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/embedcache/": {
							"title": "EmbedCache",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/referencecache/",
								"api/namespaces/obsidian/interfaces/pos/"
							],
							"backlinks": [
								"api/namespaces/obsidian/interfaces/cachedmetadata/",
								"api/namespaces/obsidian/interfaces/referencecache/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/footnotecache/": {
							"title": "FootnoteCache",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/cacheitem/",
								"api/namespaces/obsidian/interfaces/pos/"
							],
							"backlinks": [
								"api/namespaces/obsidian/interfaces/cachedmetadata/",
								"api/namespaces/obsidian/interfaces/cacheitem/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/frontmattercache/": {
							"title": "FrontMatterCache",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/interfaces/cachedmetadata/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/frontmatterlinkcache/": {
							"title": "FrontmatterLinkCache",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/reference/"
							],
							"backlinks": [
								"api/namespaces/obsidian/interfaces/cachedmetadata/",
								"api/namespaces/obsidian/interfaces/reference/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/headingcache/": {
							"title": "HeadingCache",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/cacheitem/",
								"api/namespaces/obsidian/interfaces/pos/"
							],
							"backlinks": [
								"api/namespaces/obsidian/interfaces/cachedmetadata/",
								"api/namespaces/obsidian/interfaces/cacheitem/",
								"api/namespaces/obsidian/interfaces/headingsubpathresult/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/sectioncache/": {
							"title": "SectionCache",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/cacheitem/",
								"api/namespaces/obsidian/interfaces/pos/"
							],
							"backlinks": [
								"api/namespaces/obsidian/interfaces/cachedmetadata/",
								"api/namespaces/obsidian/interfaces/cacheitem/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/tagcache/": {
							"title": "TagCache",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/cacheitem/",
								"api/namespaces/obsidian/interfaces/pos/"
							],
							"backlinks": [
								"api/namespaces/obsidian/interfaces/cachedmetadata/",
								"api/namespaces/obsidian/interfaces/cacheitem/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/hotkey/": {
							"title": "Hotkey",
							"content": "",
							"links": [
								"api/namespaces/obsidian/type-aliases/modifier/"
							],
							"backlinks": [
								"api/namespaces/obsidian/interfaces/command/"
							],
							"tags": []
						},
						"api\\namespaces\\obsidian\\classes\\vault/": {
							"title": "",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/interfaces/dataadapter/"
							],
							"tags": []
						},
						"api\\namespaces\\obsidian\\functions\\normalizepath/": {
							"title": "",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/interfaces/dataadapter/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/editorchange/": {
							"title": "EditorChange",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/editorrangeorcaret/",
								"api/namespaces/obsidian/interfaces/editorposition/"
							],
							"backlinks": [
								"api/namespaces/obsidian/interfaces/editorrangeorcaret/",
								"api/namespaces/obsidian/interfaces/editortransaction/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/editorrangeorcaret/": {
							"title": "EditorRangeOrCaret",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/editorchange/",
								"api/namespaces/obsidian/interfaces/editorposition/"
							],
							"backlinks": [
								"api/namespaces/obsidian/interfaces/editorchange/",
								"api/namespaces/obsidian/interfaces/editortransaction/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/editorscrollinfo/": {
							"title": "EditorScrollInfo",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/keymapcontext/": {
							"title": "KeymapContext",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/keymapinfo/"
							],
							"backlinks": [
								"api/namespaces/obsidian/interfaces/keymapinfo/",
								"api/namespaces/obsidian/type-aliases/keymapeventlistener/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/livepreviewstate-1/": {
							"title": "livePreviewState",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/livepreviewstate/": {
							"title": "LivePreviewState",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/variables/livepreviewstate/"
							],
							"tags": []
						},
						"api\\namespaces\\obsidian\\interfaces\\markdownpostprocessorcontext\\": {
							"title": "api\\namespaces\\obsidian\\interfaces\\markdownpostprocessorcontext\\",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/interfaces/markdownpostprocessor/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/markdownsectioninformation/": {
							"title": "MarkdownSectionInformation",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/interfaces/markdownpostprocessorcontext/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/obsidianprotocoldata/": {
							"title": "ObsidianProtocolData",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/type-aliases/obsidianprotocolhandler/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/platform/": {
							"title": "Platform",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/point/": {
							"title": "Point",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/interfaces/requesturlresponse/": {
							"title": "RequestUrlResponse",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/interfaces/requesturlresponsepromise/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/type-aliases/tooltipplacement/": {
							"title": "TooltipPlacement",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/interfaces/tooltipoptions/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/type-aliases/hexstring/": {
							"title": "HexString",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/type-aliases/searchmatchpart/": {
							"title": "SearchMatchPart",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/obsidian/type-aliases/searchmatches/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/variables/apiversion/": {
							"title": "apiVersion",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/variables/editoreditorfield/": {
							"title": "editorEditorField",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/variables/editorinfofield/": {
							"title": "editorInfoField",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/markdownfileinfo/"
							],
							"backlinks": [
								"api/namespaces/obsidian/variables/editorviewfield/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/variables/editorlivepreviewfield/": {
							"title": "editorLivePreviewField",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/variables/editorviewfield/": {
							"title": "editorViewField",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/markdownfileinfo/",
								"api/namespaces/obsidian/variables/editorinfofield/"
							],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/variables/livepreviewstate/": {
							"title": "livePreviewState",
							"content": "",
							"links": [
								"api/namespaces/obsidian/interfaces/livepreviewstate/"
							],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/variables/moment/": {
							"title": "moment",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/obsidian/variables/platform/": {
							"title": "Platform",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/publish/classes/component/": {
							"title": "Component",
							"content": "",
							"links": [
								"api/namespaces/publish/classes/markdownrenderchild/",
								"api/namespaces/publish/interfaces/eventref/"
							],
							"backlinks": [
								"api/namespaces/publish/classes/markdownrenderchild/"
							],
							"tags": []
						},
						"api/namespaces/publish/classes/markdownrenderchild/": {
							"title": "MarkdownRenderChild",
							"content": "",
							"links": [
								"api/namespaces/publish/classes/component/",
								"api/namespaces/publish/interfaces/eventref/"
							],
							"backlinks": [
								"api/namespaces/publish/classes/component/",
								"api/namespaces/publish/interfaces/markdownpostprocessorcontext/"
							],
							"tags": []
						},
						"api/namespaces/publish/interfaces/eventref/": {
							"title": "EventRef",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/publish/classes/component/",
								"api/namespaces/publish/classes/events/",
								"api/namespaces/publish/classes/markdownrenderchild/",
								"api/namespaces/publish/classes/publish/"
							],
							"tags": []
						},
						"api/namespaces/publish/classes/events/": {
							"title": "Events",
							"content": "",
							"links": [
								"api/namespaces/publish/classes/publish/",
								"api/namespaces/publish/interfaces/eventref/"
							],
							"backlinks": [
								"api/namespaces/publish/classes/publish/"
							],
							"tags": []
						},
						"api/namespaces/publish/classes/publish/": {
							"title": "Publish",
							"content": "",
							"links": [
								"api/namespaces/publish/classes/events/",
								"api/namespaces/publish/interfaces/eventref/",
								"api/namespaces/publish/interfaces/markdownpostprocessor/"
							],
							"backlinks": [
								"api/namespaces/publish/classes/events/"
							],
							"tags": []
						},
						"api/namespaces/publish/classes/markdownpreviewrenderer/": {
							"title": "MarkdownPreviewRenderer",
							"content": "",
							"links": [
								"api/namespaces/publish/interfaces/markdownpostprocessorcontext/",
								"api/namespaces/publish/interfaces/markdownpostprocessor/"
							],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/publish/interfaces/markdownpostprocessorcontext/": {
							"title": "MarkdownPostProcessorContext",
							"content": "",
							"links": [
								"api/namespaces/publish/classes/markdownrenderchild/",
								"api/namespaces/publish/interfaces/markdownsectioninformation/"
							],
							"backlinks": [
								"api/namespaces/publish/classes/markdownpreviewrenderer/",
								"api/namespaces/publish/interfaces/markdownpostprocessor/"
							],
							"tags": []
						},
						"api/namespaces/publish/interfaces/markdownpostprocessor/": {
							"title": "MarkdownPostProcessor",
							"content": "",
							"links": [
								"api\\namespaces\\publish\\interfaces\\markdownpostprocessorcontext\\",
								"api/namespaces/publish/interfaces/markdownpostprocessorcontext/"
							],
							"backlinks": [
								"api/namespaces/publish/classes/markdownpreviewrenderer/",
								"api/namespaces/publish/classes/publish/"
							],
							"tags": []
						},
						"api\\namespaces\\publish\\interfaces\\markdownpostprocessorcontext\\": {
							"title": "api\\namespaces\\publish\\interfaces\\markdownpostprocessorcontext\\",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/publish/interfaces/markdownpostprocessor/"
							],
							"tags": []
						},
						"api/namespaces/publish/interfaces/markdownsectioninformation/": {
							"title": "MarkdownSectionInformation",
							"content": "",
							"links": [],
							"backlinks": [
								"api/namespaces/publish/interfaces/markdownpostprocessorcontext/"
							],
							"tags": []
						},
						"api/readme/": {
							"title": "obsidian-typings",
							"content": "",
							"links": [
								"api/namespaces/codemirror__view/readme/",
								"api/namespaces/augmentations/readme/",
								"api/namespaces/canvas/readme/",
								"api/namespaces/global/readme/",
								"api/namespaces/internals/readme/",
								"api/namespaces/obsidian/readme/",
								"api/namespaces/publish/readme/"
							],
							"backlinks": [],
							"tags": []
						},
						"api/namespaces/codemirror__view/readme/": {
							"title": "",
							"content": "",
							"links": [],
							"backlinks": [
								"api/readme/"
							],
							"tags": []
						},
						"api/namespaces/augmentations/readme/": {
							"title": "",
							"content": "",
							"links": [],
							"backlinks": [
								"api/readme/"
							],
							"tags": []
						},
						"api/namespaces/canvas/readme/": {
							"title": "",
							"content": "",
							"links": [],
							"backlinks": [
								"api/readme/"
							],
							"tags": []
						},
						"api/namespaces/global/readme/": {
							"title": "",
							"content": "",
							"links": [],
							"backlinks": [
								"api/readme/"
							],
							"tags": []
						},
						"api/namespaces/internals/readme/": {
							"title": "",
							"content": "",
							"links": [],
							"backlinks": [
								"api/readme/"
							],
							"tags": []
						},
						"api/namespaces/obsidian/readme/": {
							"title": "",
							"content": "",
							"links": [],
							"backlinks": [
								"api/readme/"
							],
							"tags": []
						},
						"api/namespaces/publish/readme/": {
							"title": "",
							"content": "",
							"links": [],
							"backlinks": [
								"api/readme/"
							],
							"tags": []
						},
						"guides/start/": {
							"title": "Quick start",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"index/": {
							"title": "Welcome to Starlight",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						},
						"reference/intro/": {
							"title": "Intro",
							"content": "",
							"links": [],
							"backlinks": [],
							"tags": []
						}
					},
				}),
			],
		}),
	],
});
