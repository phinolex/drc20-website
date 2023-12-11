import { ThemeConfig } from '@bg-dev/nuxt-naiveui'

const textColor = '#4c4f69'
const textColorDark = '#ffffff'
const titleTextColor = '#5c5f77'
const titleTextColorDark = '#babbf1'

const link = '#e0cd81'
const linkHover = '#e0cd81'
const linkDark = '#e0cd81'
const linkHoverDark = '#e0cd81'

const baseColor = '#eff1f5'
const bodyColor = '#eff1f5'
const baseColorDark = '#2c2c2c'
const bodyColorDark = '#2c2c2c'

const border = '#dee5ed'
const borderDark = '#2c2c2c'

export const themeConfig: ThemeConfig = {
  shared: {
    common: {
      fontFamily: 'Radio+Canada',
    },
    Button: {
      fontWeight: 600,
    },
    Message: {
      fontSize: '16px',
      padding: '18px 21px',
      iconSize: '24px',
    },
    Card: {
      titleFontSizeLarge: '20px',
      titleFontWeight: 700,
      borderRadius: '8px',
    },
    Menu: {
      fontSize: '16px',
    },
    Form: {
      labelFontSizeTopLarge: '16px',
      labelFontWeight: 500,
    },
    Collapse: {
      titleFontSize: '18px',
      titleFontWeight: 500,
    },
  }, // Common theme options
  // mobileOrTablet: {}, // Theme options applied on mobile and tablet
  // mobile: {}, // Theme options applied on mobile only
  light: {
    common: {
      textColorBase: textColor,
      baseColor,
      bodyColor,
      primaryColor: link,
      primaryColorHover: '#dd7878',
      borderColor: '#ccd0da',
      inputColor: 'rgba(0, 0, 0, 0.02)',
      popoverColor: '#e6e9ef',
    },
    Button: {
      textColorPrimary: '#dce0e8',
      textColorHoverPrimary: '#dce0e8',
    },
    Anchor: {
      linkTextColor: textColor,
      linkTextColorActive: link,
      linkTextColorHover: link,
      linkTextColorPressed: linkHover,
    },
    Card: {
      color: baseColor,
      borderColor: border,
      textColor,
      titleTextColor,
    },
    Menu: {
      itemTextColorHorizontal: textColor,
      itemTextColorActiveHorizontal: link,
      itemTextColorActiveHoverHorizontal: linkHover,
      itemTextColorHoverHorizontal: linkHover,
      itemTextColorActive: link,
      itemTextColorActiveHover: linkHover,
    },
    Dropdown: {
      dividerColor: border,
      optionTextColor: textColor,
      optionTextColorHover: textColor,
    },
    Drawer: {
      textColor,
      dividerColor: border,
      titleTextColor,
    },
    Collapse: {
      dividerColor: border,
      arrowColor: link,
    },
    Form: {
      labelTextColor: textColor,
      asteriskColor: '#d20f39',
    },
    Input: {
      placeholderColor: '#737994',
      textColor,
      borderHover: `1px solid ${link}`,
      borderFocus: `1px solid ${link}`,
    },
    TimePicker: {
      iconColor: '#737994',
    },
    Switch: {
      railColorActive: link,
    },
    Checkbox: {
      textColor,
    },
    Radio: {
      textColor,
    },
    Select: {
      peers: {
        InternalSelection: { textColor },
        InternalSelectMenu: { optionTextColor: textColor },
      },
    },
  }, // Theme options applied on light mode
  dark: {
    common: {
      textColorBase: textColorDark,
      baseColor: baseColorDark,
      bodyColor: bodyColorDark,
      primaryColor: linkDark,
      primaryColorHover: ' background: rgba(224, 205, 129, 0.521).08)',
      inputColor: 'rgba(255, 255, 255, 0.02)',
      popoverColor: '#232634',
    },
    Button: {
      textColorPrimary: '#232634',
      textColorHoverPrimary: '#232634',
    },
    Anchor: {
      linkTextColor: textColorDark,
      linkTextColorActive: linkDark,
      linkTextColorHover: linkDark,
      linkTextColorPressed: linkHoverDark,
    },
    Card: {
      color: baseColorDark,
      borderColor: borderDark,
      textColor: textColorDark,
      titleTextColor: titleTextColorDark,
    },
    Menu: {
      itemTextColorHorizontal: textColorDark,
      itemTextColorActiveHorizontal: linkDark,
      itemTextColorActiveHoverHorizontal: linkHoverDark,
      itemTextColorHoverHorizontal: linkHoverDark,
      itemTextColorActive: linkDark,
      itemTextColorActiveHover: linkHoverDark,
    },
    Dropdown: {
      baseColor: "#fff",
      bodyColor: "#fff",
      borderColor: '#fff',
      dividerColor: borderDark,
      optionTextColor: textColorDark,
      optionTextColorHover: textColorDark,
    },
    Drawer: {
      textColor: textColorDark,
      dividerColor: borderDark,
      titleTextColor: titleTextColorDark,
    },
    Collapse: {
      dividerColor: borderDark,
      arrowColor: linkDark,
    },
    Form: {
      labelTextColor: textColorDark,
      asteriskColor: '#e78284',
    },
    Input: {
      borderRadius: '10px',
      placeholderColor: 'rgba(255, 255, 255, 0.35)',
      textColor: textColorDark,
      borderHover: `1px solid ${linkDark}`,
      borderFocus: `1px solid ${linkDark}`,
      color: 'rgba(255, 255, 255, 0.1215686275)',
    },
    TimePicker: {
      iconColor: '#737994',
    },
    Switch: {
      railColorActive: '#81c8be',
    },
    Checkbox: {
      textColor: textColorDark,
    },
    Radio: {
      textColor: textColorDark,
    },
    Alert: {

    },
    Tag: {
      color: 'rgba(255, 255, 255, 0.88)',
      textColor: '#3d383b',

    },
    Steps: {
      indicatorTextColorProcess: '#64294b',
      textColorBase: textColorDark,
      baseColor: baseColorDark,
      bodyColor: bodyColorDark,
      primaryColor: linkDark,
      primaryColorHover: '#cd6caf',
      inputColor: 'rgba(255, 255, 255, 0.02)',
      popoverColor: '#232634',
    },
    Slider: {
      indicatorTextColor: '#64294b',
      indicatorColor: '#fff'
    },
    Select: {
      peers: {
        InternalSelection: { textColor: textColorDark },
        InternalSelectMenu: { optionTextColor: textColorDark },
      },
    },
  }, // Theme options applied on dark mode
}
