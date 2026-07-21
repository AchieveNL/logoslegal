"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { useEffect } from "react";

interface Props {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
}

function ToolbarButton({
  active,
  onClick,
  children,
  title,
}: {
  active?: boolean;
  onClick: () => void;
  children: React.ReactNode;
  title: string;
}) {
  return (
    <button
      type="button"
      title={title}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      className={`h-9 min-w-9 px-2 rounded-lg font-poppins text-sm font-semibold transition-colors ${
        active
          ? "bg-brand-blue text-white"
          : "text-[#002B58] hover:bg-brand-blue-light"
      }`}
    >
      {children}
    </button>
  );
}

export default function RichTextEditor({ value, onChange, placeholder }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [2, 3] } }),
      Link.configure({ openOnClick: false }),
      Placeholder.configure({ placeholder: placeholder || "Schrijf hier..." }),
    ],
    content: value,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "prose-editor font-poppins text-base text-brand-dark min-h-[260px] px-5 py-4 focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  /* Sync external value changes (e.g. locale switch) into the editor. */
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || "", { emitUpdate: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, editor]);

  if (!editor) return null;

  const setLink = () => {
    const prev = editor.getAttributes("link").href as string | undefined;
    const url = window.prompt("Link URL", prev || "https://");
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().unsetLink().run();
      return;
    }
    editor.chain().focus().setLink({ href: url }).run();
  };

  return (
    <div className="border border-[#292D32] rounded-lg bg-white focus-within:border-brand-blue focus-within:ring-4 focus-within:ring-brand-blue/10 transition-[border-color,box-shadow]">
      <div className="flex flex-wrap items-center gap-1 px-3 py-2 border-b border-brand-gray/60">
        <ToolbarButton
          title="Vet"
          active={editor.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          B
        </ToolbarButton>
        <ToolbarButton
          title="Cursief"
          active={editor.isActive("italic")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <span className="italic">I</span>
        </ToolbarButton>
        <span className="w-px h-6 bg-brand-gray/60 mx-1" />
        <ToolbarButton
          title="Kop 2"
          active={editor.isActive("heading", { level: 2 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        >
          H2
        </ToolbarButton>
        <ToolbarButton
          title="Kop 3"
          active={editor.isActive("heading", { level: 3 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        >
          H3
        </ToolbarButton>
        <span className="w-px h-6 bg-brand-gray/60 mx-1" />
        <ToolbarButton
          title="Opsomming"
          active={editor.isActive("bulletList")}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          • •
        </ToolbarButton>
        <ToolbarButton
          title="Genummerde lijst"
          active={editor.isActive("orderedList")}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          1.
        </ToolbarButton>
        <ToolbarButton
          title="Citaat"
          active={editor.isActive("blockquote")}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        >
          &ldquo;&rdquo;
        </ToolbarButton>
        <span className="w-px h-6 bg-brand-gray/60 mx-1" />
        <ToolbarButton title="Link" active={editor.isActive("link")} onClick={setLink}>
          🔗
        </ToolbarButton>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}
