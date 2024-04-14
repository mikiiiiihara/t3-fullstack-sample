/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./frontend/components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderColor: {
        line: "rgba(0,0,0,0.08)",
      },
      colors: {
        primary: {
          50: "#e3f8ff", // 最も明るいバリエーション
          100: "#b3ecff", // より明るいバリエーション
          200: "#81defd", // 明るいバリエーション
          300: "#5ed0fa", // より中間の明るさ
          400: "#40c3f7", // 中間のバリエーション
          500: "#2bb0ed", // デフォルトより少し暗め
          600: "#1992d4", // デフォルトのプライマリカラー
          700: "#127fbf", // 暗めのバリエーション
          800: "#0b69a3", // より暗いバリエーション
          900: "#035388", // 最も暗いバリエーション
          DEFAULT: "#0ea5e9", // プライマリカラーのデフォルト値
        },
      },
    },
  },
  plugins: [],
};
