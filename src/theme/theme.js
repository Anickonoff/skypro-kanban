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
      secondarytr: "#94a6be66",
      inverse: "#ffffff",
      error: "#f84d4d",
    },

    background: {
      page: "#EAEEF6", // wrapper
      secondary: "#EAEEF6", // Вторичный фон (main, input, day calendar)
      surface: "#ffffff",
      overlay: "#00000066", // Полупрозрачный оверлей
    },

    // Цвета кнопок
    button: {
      bgPrimary: "#565eef", // Основной цвет
      bgSecondary: "transparent", // Прозрачный цвет кнопки
      hoverPrimary: "#33399b", // При наведении
      hoverSecondary: "#565eef", // При наведении на кнопку без фона
      disabled: "#94a6be", // Неактивная кнопка
      borderSecondary: "#565eef", // Граница кнопок без фона
      textPrimary: "#ffffff", // Цвет текста на кнопках с фоном
      textSecondary: "#565eef", // Цвет текста на кнопках без фона
      bgStatusPrimary: "#94a6be", // Цвет кнопки статуса задачи
      bgStatusSecondary: "transparent",
      textStatusPrimary: "#ffffff", // Цвет текста статуса на кнопке с фоном
      textStatusSecondary: "#94a6be", // Цвет текста статуса на кнопке без фона
    },

    border: {
      default: "#94A6BE66", // Прозрачная граница форм и кнопок статуса задачи
      pop: "#d4dbe5", // Границы всплывающих окон
      error: "#f84d4d", // Граница полей при ошибке
    },

    // Категории задач
    categories: {
      orange: {
        bg: "#ffe4c2",
        text: "#ff6d00",
      },
      green: {
        bg: "#b4fdd1",
        text: "#06b16e",
      },
      purple: {
        bg: "#e9d4ff",
        text: "#9a48f1",
      },
      other: {
        bg: "#94a6be",
        test: "#ffffff",
      },
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
      xxs: "10px",
      xs: "12px",
      sm: "14px",
      md: "20px",
    },
  },

  shadows: {
    pop: "0px 4px 67px -12px rgba(0, 0, 0, 0.13)",
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

const darkTheme = {
  colors: {
    text: {
      primary: "#ffffff", //!
      secondary: "#94a6be", //!
      secondarytr: "#94a6be66",
      inverse: "#151419",
      error: "#f84d4d",
    },

    //!
    background: {
      page: "#151419", // wrapper
      secondary: "#151419", // Вторичный фон (main, input, day calendar)
      surface: "#20202C",
      overlay: "#000000CC", // Полупрозрачный оверлей
    },

    //! Цвета кнопок
    button: {
      bgPrimary: "#565eef", // Основной цвет
      bgSecondary: "transparent", // Прозрачный цвет кнопки
      hoverPrimary: "#33399b", // При наведении
      hoverSecondary: "#565eef", // При наведении на кнопку без фона
      disabled: "#94a6be", // Неактивная кнопка
      borderSecondary: "#ffffff", // Граница кнопок без фона
      textPrimary: "#ffffff", // Цвет текста на кнопках с фоном
      textSecondary: "#ffffff", // Цвет текста на кнопках без фона
      bgStatusPrimary: "#94a6be", // Цвет кнопки статуса задачи
      bgStatusSecondary: "transparent",
      textStatusPrimary: "#151419", // Цвет текста статуса на кнопке с фоном
      textStatusSecondary: "#94a6be", // Цвет текста статуса на кнопке без фона
    },

    //! Границы
    border: {
      default: "rgba(148, 166, 190, 0.4)", // Прозрачная граница форм и кнопок статуса задачи
      pop: "#4E5566", // Границы всплывающих окон
      error: "#f84d4d", // Граница полей при ошибке
    },

    //! Категории задач
    categories: {
      orange: {
        bg: "#ff6d00",
        text: "#FFE4C2",
      },
      green: {
        bg: "#06B16E",
        text: "#B4FDD1",
      },
      purple: {
        bg: "#9A48F1",
        text: "#E9D4FF",
      },
      other: {
        bg: "#94a6be",
        text: "#ffffff",
      },
    },

    //! Календарь
    calendar: {
      weekend: "#94a6be", // Выходные на будущее
      bgActiveDay: "#94a6be", // Выбранная дата в календаре
      bgCellHover: "#151419", // Дата в календаре под курсором (при наведении)
    },
  },

  fonts: {
    family: '"Roboto", Arial, Helvetica, sans-serif',
    size: {
      xxs: "10px",
      xs: "12px",
      sm: "14px",
      md: "20px",
    },
  },

  //!
  shadows: {
    pop: "0px 4px 67px -12px #00000021",
    popUser: "0px 10px 39px 0px #94A6BE66",
  },

  // Медиа-запросы
  devices: {
    xs: `(max-width: ${breakpoints.xs})`,
    sm: `(max-width: ${breakpoints.sm})`,
    md: `(max-width: ${breakpoints.md})`,
    lg: `(max-width: ${breakpoints.lg})`,
  },
};

export { lightTheme, darkTheme };
