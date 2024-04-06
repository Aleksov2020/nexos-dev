/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */




/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    title,
    spanTitle,
    tableTextTitle1,
    tableTextTitle2,
    tableTextTitle3,
    tableTextTitle4,
    tableTextTitle5,
    tableTextTitle6,
    tableTextTitle7,
    tableTextTitle8,
    tableTextSubtitle1,
    tableTextSubtitle2,
    tableTextSubtitle3,
    tableTextSubtitle4,
    tableTextSubtitle5,
    tableTextSubtitle6,
    tableTextSubtitle7,
    tableTextSubtitle8,
    imageSrc1,
    imageSrc2,
    imageSrc3,
    imageSrc4,
    imageSrc5,
    imageSrc6,
    imageSrc7,
    imageSrc8
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    class: "elevate light-bg",
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "title-table-wrapper col"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "row center-align"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "elevate-title title-black title",
    value: title,
    onChange: newTitle => setAttributes({
      title: newTitle
    }),
    placeholder: "Enter title here..."
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "span",
    className: "accent-smooth",
    value: spanTitle,
    onChange: newSpanTitle => setAttributes({
      spanTitle: newSpanTitle
    }),
    placeholder: "Enter subtitle here..."
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "elevate-table-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "elevate-table row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "elevate-table-right-part col"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "elevate-table-element row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-number"
  }, "01"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "image-text-wrapper row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      imageSrc1: media.url
    }),
    type: "image",
    value: imageSrc1,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open
    }, imageSrc1 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: imageSrc1,
      alt: "Selected Image",
      style: {
        maxWidth: '100%'
      }
    }) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Image', 'my-plugin'))
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "table-text-title",
    value: tableTextTitle1,
    onChange: newTableTextTitle => setAttributes({
      tableTextTitle1: newTableTextTitle
    }),
    placeholder: "Enter title here..."
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "table-text-subtitle",
    value: tableTextSubtitle1,
    onChange: newTableTextSubtitle => setAttributes({
      tableTextSubtitle1: newTableTextSubtitle
    }),
    placeholder: "Enter title here..."
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "elevate-table-element row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-number"
  }, "02"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "image-text-wrapper row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      imageSrc2: media.url
    }),
    type: "image",
    value: imageSrc2,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open
    }, imageSrc2 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: imageSrc2,
      alt: "Selected Image",
      style: {
        maxWidth: '100%'
      }
    }) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Image', 'my-plugin'))
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "table-text-title",
    value: tableTextTitle2,
    onChange: newTableTextTitle => setAttributes({
      tableTextTitle2: newTableTextTitle
    }),
    placeholder: "Enter title here..."
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "table-text-subtitle",
    value: tableTextSubtitle2,
    onChange: newTableTextSubtitle => setAttributes({
      tableTextSubtitle2: newTableTextSubtitle
    }),
    placeholder: "Enter title here..."
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "elevate-table-element row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-number"
  }, "03"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "image-text-wrapper row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      imageSrc3: media.url
    }),
    type: "image",
    value: imageSrc3,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open
    }, imageSrc3 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: imageSrc3,
      alt: "Selected Image",
      style: {
        maxWidth: '100%'
      }
    }) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Image', 'my-plugin'))
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "table-text-title",
    value: tableTextTitle3,
    onChange: newTableTextTitle => setAttributes({
      tableTextTitle3: newTableTextTitle
    }),
    placeholder: "Enter title here..."
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "table-text-subtitle",
    value: tableTextSubtitle3,
    onChange: newTableTextSubtitle => setAttributes({
      tableTextSubtitle3: newTableTextSubtitle
    }),
    placeholder: "Enter title here..."
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "elevate-table-element row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-number"
  }, "04"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "image-text-wrapper row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      imageSrc4: media.url
    }),
    type: "image",
    value: imageSrc4,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open
    }, imageSrc4 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: imageSrc4,
      alt: "Selected Image",
      style: {
        maxWidth: '100%'
      }
    }) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Image', 'my-plugin'))
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "table-text-title",
    value: tableTextTitle4,
    onChange: newTableTextTitle => setAttributes({
      tableTextTitle4: newTableTextTitle
    }),
    placeholder: "Enter title here..."
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "table-text-subtitle",
    value: tableTextSubtitle4,
    onChange: newTableTextSubtitle => setAttributes({
      tableTextSubtitle4: newTableTextSubtitle
    }),
    placeholder: "Enter title here..."
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "elevate-table-left-part col"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "elevate-table-element row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-number"
  }, "05"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "image-text-wrapper row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      imageSrc5: media.url
    }),
    type: "image",
    value: imageSrc5,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open
    }, imageSrc5 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: imageSrc5,
      alt: "Selected Image",
      style: {
        maxWidth: '100%'
      }
    }) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Image', 'my-plugin'))
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "table-text-title",
    value: tableTextTitle5,
    onChange: newTableTextTitle => setAttributes({
      tableTextTitle5: newTableTextTitle
    }),
    placeholder: "Enter title here..."
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "table-text-subtitle",
    value: tableTextSubtitle5,
    onChange: newTableTextSubtitle => setAttributes({
      tableTextSubtitle5: newTableTextSubtitle
    }),
    placeholder: "Enter title here..."
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "elevate-table-element row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-number"
  }, "06"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "image-text-wrapper row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      imageSrc6: media.url
    }),
    type: "image",
    value: imageSrc6,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open
    }, imageSrc6 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: imageSrc6,
      alt: "Selected Image",
      style: {
        maxWidth: '100%'
      }
    }) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Image', 'my-plugin'))
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "table-text-title",
    value: tableTextTitle6,
    onChange: newTableTextTitle => setAttributes({
      tableTextTitle6: newTableTextTitle
    }),
    placeholder: "Enter title here..."
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "table-text-subtitle",
    value: tableTextSubtitle6,
    onChange: newTableTextSubtitle => setAttributes({
      tableTextSubtitle6: newTableTextSubtitle
    }),
    placeholder: "Enter title here..."
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "elevate-table-element row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-number"
  }, "07"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "image-text-wrapper row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      imageSrc7: media.url
    }),
    type: "image",
    value: imageSrc7,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open
    }, imageSrc7 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: imageSrc7,
      alt: "Selected Image",
      style: {
        maxWidth: '100%'
      }
    }) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Image', 'my-plugin'))
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "table-text-title",
    value: tableTextTitle7,
    onChange: newTableTextTitle => setAttributes({
      tableTextTitle7: newTableTextTitle
    }),
    placeholder: "Enter title here..."
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "table-text-subtitle",
    value: tableTextSubtitle7,
    onChange: newTableTextSubtitle => setAttributes({
      tableTextSubtitle7: newTableTextSubtitle
    }),
    placeholder: "Enter title here..."
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "elevate-table-element row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-number"
  }, "08"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "image-text-wrapper row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      imageSrc8: media.url
    }),
    type: "image",
    value: imageSrc8,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open
    }, imageSrc8 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: imageSrc8,
      alt: "Selected Image",
      style: {
        maxWidth: '100%'
      }
    }) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Image', 'my-plugin'))
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "table-text-title",
    value: tableTextTitle8,
    onChange: newTableTextTitle => setAttributes({
      tableTextTitle8: newTableTextTitle
    }),
    placeholder: "Enter title here..."
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    className: "table-text-subtitle",
    value: tableTextSubtitle8,
    onChange: newTableTextSubtitle => setAttributes({
      tableTextSubtitle8: newTableTextSubtitle
    }),
    placeholder: "Enter title here..."
  }))))))))));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  attributes: {
    title: {
      type: 'string',
      // Тип атрибута: строка
      default: '' // Значение по умолчанию
    },
    spanTitle: {
      type: 'string',
      // Тип атрибута: строка
      default: '' // Значение по умолчанию
    },
    tableTextTitle1: {
      type: 'string',
      // Тип атрибута: строка
      default: '' // Значение по умолчанию
    },
    tableTextTitle2: {
      type: 'string',
      // Тип атрибута: строка
      default: '' // Значение по умолчанию
    },
    tableTextTitle3: {
      type: 'string',
      // Тип атрибута: строка
      default: '' // Значение по умолчанию
    },
    tableTextTitle4: {
      type: 'string',
      // Тип атрибута: строка
      default: '' // Значение по умолчанию
    },
    tableTextTitle5: {
      type: 'string',
      // Тип атрибута: строка
      default: '' // Значение по умолчанию
    },
    tableTextTitle6: {
      type: 'string',
      // Тип атрибута: строка
      default: '' // Значение по умолчанию
    },
    tableTextTitle7: {
      type: 'string',
      // Тип атрибута: строка
      default: '' // Значение по умолчанию
    },
    tableTextTitle8: {
      type: 'string',
      // Тип атрибута: строка
      default: '' // Значение по умолчанию
    },
    tableTextSubtitle1: {
      type: 'string',
      // Тип атрибута: строка
      default: '' // Значение по умолчанию
    },
    tableTextSubtitle2: {
      type: 'string',
      // Тип атрибута: строка
      default: '' // Значение по умолчанию
    },
    tableTextSubtitle3: {
      type: 'string',
      // Тип атрибута: строка
      default: '' // Значение по умолчанию
    },
    tableTextSubtitle4: {
      type: 'string',
      // Тип атрибута: строка
      default: '' // Значение по умолчанию
    },
    tableTextSubtitle5: {
      type: 'string',
      // Тип атрибута: строка
      default: '' // Значение по умолчанию
    },
    tableTextSubtitle6: {
      type: 'string',
      // Тип атрибута: строка
      default: '' // Значение по умолчанию
    },
    tableTextSubtitle7: {
      type: 'string',
      // Тип атрибута: строка
      default: '' // Значение по умолчанию
    },
    tableTextSubtitle8: {
      type: 'string',
      // Тип атрибута: строка
      default: '' // Значение по умолчанию
    },
    imageSrc1: {
      type: 'string',
      default: null
    },
    imageSrc2: {
      type: 'string',
      default: null
    },
    imageSrc3: {
      type: 'string',
      default: null
    },
    imageSrc4: {
      type: 'string',
      default: null
    },
    imageSrc5: {
      type: 'string',
      default: null
    },
    imageSrc6: {
      type: 'string',
      default: null
    },
    imageSrc7: {
      type: 'string',
      default: null
    },
    imageSrc8: {
      type: 'string',
      default: null
    }
  },
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
function save(props) {
  const {
    attributes
  } = props;
  const {
    title,
    spanTitle,
    tableTextTitle1,
    tableTextTitle2,
    tableTextTitle3,
    tableTextTitle4,
    tableTextTitle5,
    tableTextTitle6,
    tableTextTitle7,
    tableTextTitle8,
    tableTextSubtitle1,
    tableTextSubtitle2,
    tableTextSubtitle3,
    tableTextSubtitle4,
    tableTextSubtitle5,
    tableTextSubtitle6,
    tableTextSubtitle7,
    tableTextSubtitle8,
    imageSrc1,
    imageSrc2,
    imageSrc3,
    imageSrc4,
    imageSrc5,
    imageSrc6,
    imageSrc7,
    imageSrc8
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    class: "elevate light-bg",
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "title-table-wrapper col"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "elevate-title title-black title"
  }, title, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "accent-smooth"
  }, " ", spanTitle, " ")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "elevate-table-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "elevate-table row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "elevate-table-right-part col"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "elevate-table-element row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-number"
  }, "01"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "image-text-wrapper row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-image"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: imageSrc1
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-text-title"
  }, tableTextTitle1), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-text-subtitle"
  }, tableTextSubtitle1)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "elevate-table-element row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-number"
  }, "02"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "image-text-wrapper row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-image"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: imageSrc2
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-text-title"
  }, tableTextTitle2), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-text-subtitle"
  }, tableTextSubtitle2)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "elevate-table-element row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-number"
  }, "03"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "image-text-wrapper row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-image"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: imageSrc3
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-text-title"
  }, tableTextTitle3), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-text-subtitle"
  }, tableTextSubtitle3)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "elevate-table-element row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-number"
  }, "04"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "image-text-wrapper row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-image"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: imageSrc4
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-text-title"
  }, tableTextTitle4), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-text-subtitle"
  }, tableTextSubtitle4))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "elevate-table-left-part col"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "elevate-table-element row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-number"
  }, "05"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "image-text-wrapper row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-image"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: imageSrc5
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-text-title"
  }, tableTextTitle5), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-text-subtitle"
  }, tableTextSubtitle5)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "elevate-table-element row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-number"
  }, "06"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "image-text-wrapper row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-image"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: imageSrc6
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-text-title"
  }, tableTextTitle6), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-text-subtitle"
  }, tableTextSubtitle6)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "elevate-table-element row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-number"
  }, "07"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "image-text-wrapper row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-image"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: imageSrc7
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-text-title"
  }, tableTextTitle7), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-text-subtitle"
  }, tableTextSubtitle7)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "elevate-table-element row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-number"
  }, "08"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "image-text-wrapper row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-image"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: imageSrc8
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-text-title"
  }, tableTextTitle8), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "table-text-subtitle"
  }, tableTextSubtitle8))))))))));
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/elevate2","version":"0.1.0","title":"Elevate2","category":"widgets","icon":"admin-generic","description":"Elevate your trading block.","example":{},"supports":{"html":false},"textdomain":"elevate2","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkelevate2"] = globalThis["webpackChunkelevate2"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map