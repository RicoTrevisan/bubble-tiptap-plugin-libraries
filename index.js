import { Editor } from "@tiptap/core";
window.tiptapEditor = Editor;

// import StarterKit from '@tiptap/starter-kit'
// window.tiptapStarterKit = StarterKit;

import Document from "@tiptap/extension-document";
window.tiptapDocument = Document;

import HardBreak from "@tiptap/extension-hard-break";
window.tiptapHardBreak = HardBreak;

import Paragraph from "@tiptap/extension-paragraph";
window.tiptapParagraph = Paragraph;

import Text from "@tiptap/extension-text";
window.tiptapText = Text;

import Heading from "@tiptap/extension-heading";
window.tiptapHeading = Heading;

import Bold from "@tiptap/extension-bold";
window.tiptapBold = Bold;

import Code from "@tiptap/extension-code";
window.tiptapCode = Code;

import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
window.tiptapCodeBlockLowlight = CodeBlockLowlight;

// import { lowlight } from 'lowlight';
// window.tiptapLowlight = lowlight;
import Mention from "@tiptap/extension-mention";
window.tiptapMention = Mention;

import Italic from "@tiptap/extension-italic";
window.tiptapItalic = Italic;

import Strike from "@tiptap/extension-strike";
window.tiptapStrike = Strike;

import Dropcursor from "@tiptap/extension-dropcursor";
window.tiptapDropcursor = Dropcursor;

import Gapcursor from "@tiptap/extension-gapcursor";
window.tiptapGapcursor = Gapcursor;

import History from "@tiptap/extension-history";
window.tiptapHistory = History;

import Blockquote from "@tiptap/extension-blockquote";
window.tiptapBlockquote = Blockquote;

import BulletList from "@tiptap/extension-bullet-list";
window.tiptapBulletList = BulletList;

import CodeBlock from "@tiptap/extension-code-block";
window.tiptapCodeBlock = CodeBlock;

import HorizontalRule from "@tiptap/extension-horizontal-rule";
window.tiptapHorizontalRule = HorizontalRule;

import ListItem from "@tiptap/extension-list-item";
window.tiptapListItem = ListItem;

import OrderedList from "@tiptap/extension-ordered-list";
window.tiptapOrderedList = OrderedList;

import CharacterCount from "@tiptap/extension-character-count";
window.tiptapCharacterCount = CharacterCount;

import Youtube from "@tiptap/extension-youtube";
window.tiptapYoutube = Youtube;

import Underline from "@tiptap/extension-underline";
window.tiptapUnderline = Underline;

import Table from "@tiptap/extension-table";
window.tiptapTable = Table;

import TableCell from "@tiptap/extension-table-cell";
window.tiptapTableCell = TableCell;

import TableHeader from "@tiptap/extension-table-header";
window.tiptapTableHeader = TableHeader;

import TableRow from "@tiptap/extension-table-row";
window.tiptapTableRow = TableRow;

import Image from "@tiptap/extension-image";
window.tiptapImage = Image;

import Link from "@tiptap/extension-link";
window.tiptapLink = Link;

import TaskList from "@tiptap/extension-task-list";
window.tiptapTaskList = TaskList;

import TaskItem from "@tiptap/extension-task-item";
window.tiptapTaskItem = TaskItem;

import Placeholder from "@tiptap/extension-placeholder";
window.tiptapPlaceholder = Placeholder;

import BubbleMenu from "@tiptap/extension-bubble-menu";
window.tiptapBubbleMenu = BubbleMenu;

import FloatingMenu from "@tiptap/extension-floating-menu";
window.tiptapFloatingMenu = FloatingMenu;

import TextAlign from "@tiptap/extension-text-align";
window.tiptapTextAlign = TextAlign;

import Highlight from "@tiptap/extension-highlight";
window.tiptapHighlight = Highlight;

import { generateHTML } from "@tiptap/html";
window.tiptapgenerateHTML = generateHTML;

import Collaboration from "@tiptap/extension-collaboration";
window.tiptapCollaboration = Collaboration;

import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
window.tiptapCollaborationCursor = CollaborationCursor;

import { TiptapCollabProvider } from "@hocuspocus/provider";
window.tiptapCollabProvider = TiptapCollabProvider;

import { HocuspocusProvider } from "@hocuspocus/provider";
window.tiptapHocuspocusProvider = HocuspocusProvider;

import * as Y from "yjs";
window.tiptapY = Y;

import { createClient } from "@liveblocks/client";
window.tiptapCreateClient = createClient;

import LiveblocksProvider from "@liveblocks/yjs";
window.tiptapLiveblocksProvider = LiveblocksProvider;
