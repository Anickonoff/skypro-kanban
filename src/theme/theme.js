const breakpoints = {
  xs: "375px",
  sm: "495px",
  md: "660px",
  lg: "1200px",
};

const lightTheme = {
  colors: {
    text: {
      primary: "#000000",
      secondary: "#94a6be",
      inverse: "#ffffff",
    },

    background: {
      page: "#F1F1F1", // wrapper
      secondary: "#EAEEF6", // Вторичный фон (main, input, day calendar)
      surface: "#ffffff",
      overlay: "rgba(0, 0, 0, 0.4)", // Полупрозрачный оверлей
    },

    // Цвета кнопок
    button: {
      main: "#565eef", // Основной цвет
      secondary:  "transparent", // Прозрачный цвет кнопки
      hover: "#33399b", // При наведении
      text: "#ffffff", // Цвет текста на кнопках с фоном
    },

    border: {
      default: "rgba(148, 166, 190, 0.4)", // Прозрачная граница форм и кнопок статуса задачи
      pop: "#d4dbe5", // Границы всплывающих окон
    },

    // Категории задач
    categories: {
      health: {
        bg: "#ffe4c2",
        text: "#ff6d00",
      },
      newYear: {
        bg: "#b4fdd1",
        text: "#06b16e",
      },
      repair: {
        bg: "#e9d4ff",
        text: "#9a48f1",
      },
      other: {
        bg: "#94a6be",
        test: "#ffffff",
      }
    },

    // Календарь
    calendar: {
      weekend: "#94a6be", // Выходные на будущее
      bgActiveDay: "#94a6be", // Выбранная дата в календаре
      bgCellHover: "#eaeef6", // Дата в календаре под курсором (при наведении)
    },
  },

  fonts: {
    family: '"Roboto", Arial, Helvetica, sans-serif',
    size: {
      xs: "10px",
      sm: "14px",
      md: "20px",
    },
  },

  shadows: {
    popExit: "0px 4px 67px -12px rgba(0, 0, 0, 0.13)",
    popUser: "0px 10px 39px 0px rgba(26, 56, 101, 0.21)",
  },

  // Медиа-запросы
  devices: {
    xs: `(max-width: ${breakpoints.xs})`,
    sm: `(max-width: ${breakpoints.sm})`,
    md: `(max-width: ${breakpoints.md})`,
    lg: `(max-width: ${breakpoints.lg})`,
  },
};

export { lightTheme };
