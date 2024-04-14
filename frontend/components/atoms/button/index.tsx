import React from "react";

// Buttonコンポーネントのプロパティの型定義
interface ButtonProps {
  children: React.ReactNode; // ボタンの中身（テキストや要素）
  className?: string; // オプショナルなCSSクラス名
  onClick?: () => void; // オプショナルなクリックイベントハンドラ
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
}) => {
  return (
    <button
      className={`p-2 rounded-md flex align-middle ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
