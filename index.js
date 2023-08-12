import { Editor } from '@tiptap/core'
window.Editor = Editor;

// import StarterKit from '@tiptap/starter-kit'
// window.StarterKit = StarterKit;

import Document from '@tiptap/extension-document';
window.Document = Document;

import HardBreak from '@tiptap/extension-hard-break';
window.HardBreak = HardBreak;

import Paragraph from '@tiptap/extension-paragraph';
window.Paragraph = Paragraph;

import Text from '@tiptap/extension-text';
window.Text = Text;

import Heading from '@tiptap/extension-heading';
window.Heading = Heading;

import Bold from '@tiptap/extension-bold';
window.Bold = Bold;

import Code from '@tiptap/extension-code';
window.Code = Code;

import Italic from '@tiptap/extension-italic';
window.Italic = Italic;

import Strike from '@tiptap/extension-strike';
window.Strike = Strike;

import Dropcursor from '@tiptap/extension-dropcursor';
window.Dropcursor = Dropcursor;

import Gapcursor from '@tiptap/extension-gapcursor';
window.Gapcursor = Gapcursor

import History from '@tiptap/extension-history';
window.History = History

import Blockquote from '@tiptap/extension-blockquote';
window.Blockquote = Blockquote;

import BulletList from '@tiptap/extension-bullet-list';
window.BulletList = BulletList;

import CodeBlock from '@tiptap/extension-code-block';
window.CodeBlock = CodeBlock;

import HorizontalRule from '@tiptap/extension-horizontal-rule';
window.HorizontalRule = HorizontalRule;

import ListItem from '@tiptap/extension-list-item';
window.ListItem = ListItem;

import OrderedList from '@tiptap/extension-ordered-list';
window.OrderedList = OrderedList;

import CharacterCount from '@tiptap/extension-character-count';
window.CharacterCount = CharacterCount;

import Youtube from "@tiptap/extension-youtube";
window.Youtube = Youtube;

import Underline from "@tiptap/extension-underline";
window.Underline = Underline;

import Table from "@tiptap/extension-table";
window.Table = Table;

import TableCell from "@tiptap/extension-table-cell";
window.TableCell = TableCell;

import TableHeader from "@tiptap/extension-table-header";
window.TableHeader = TableHeader;

import TableRow from "@tiptap/extension-table-row";
window.TableRow = TableRow;

import Image from "@tiptap/extension-image";
window.Image = Image;

import Link from "@tiptap/extension-link";
window.Link = Link;

import TaskList from "@tiptap/extension-task-list";
window.TaskList = TaskList;

import TaskItem from "@tiptap/extension-task-item";
window.TaskItem = TaskItem;

import Placeholder from "@tiptap/extension-placeholder";
window.Placeholder = Placeholder;

import BubbleMenu from "@tiptap/extension-bubble-menu";
window.BubbleMenu = BubbleMenu;

import FloatingMenu from "@tiptap/extension-floating-menu";
window.FloatingMenu = FloatingMenu;

import TextAlign from "@tiptap/extension-text-align";
window.TextAlign = TextAlign;

import Highlight from "@tiptap/extension-highlight";
window.Highlight = Highlight;

import { generateHTML } from "@tiptap/html";
window.generateHTML = generateHTML;

import Collaboration from '@tiptap/extension-collaboration';
window.Collaboration = Collaboration;

import CollaborationCursor from '@tiptap/extension-collaboration-cursor';
window.CollaborationCursor = CollaborationCursor;

import { TiptapCollabProvider } from '@hocuspocus/provider';
window.TiptapCollabProvider = TiptapCollabProvider;

import * as Y from 'yjs'
window.Y = Y;