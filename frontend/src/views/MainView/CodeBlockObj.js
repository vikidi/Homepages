const CodeBlockObj = (theme, t) => {
  return [
    [
      {
        text: `<${t('CodeBlockObj.Tags.MyProfile')}>`,
        color: theme.palette.text.secondary
      }
    ],
    [
      {
        text: `\t<${t('CodeBlockObj.Tags.Name')}>`,
        color: theme.palette.text.secondary
      },
      {
        text: ' Ville Saarinen ',
        color: theme.palette.text.primary
      },
      {
        text: `</${t('CodeBlockObj.Tags.Name')}>`,
        color: theme.palette.text.secondary
      }
    ],
    [
      {
        text: `\t<${t('CodeBlockObj.Tags.Living')}>`,
        color: theme.palette.text.secondary
      },
      {
        text: ` ${t('CodeBlockObj.CountryText')}, Espoo `,
        color: theme.palette.text.primary
      },
      {
        text: `</${t('CodeBlockObj.Tags.Living')}>`,
        color: theme.palette.text.secondary
      }
    ],
    [
      {
        text: `\t<${t('CodeBlockObj.Tags.Work')}>`,
        color: theme.palette.text.secondary
      }
    ],
    [
      {
        text: `\t\t<${t('CodeBlockObj.Tags.Place')}>`,
        color: theme.palette.text.secondary
      },
      {
        text: ' Hitachi ABB Power Grids ',
        color: theme.palette.text.primary
      },
      {
        text: `</${t('CodeBlockObj.Tags.Place')}>`,
        color: theme.palette.text.secondary
      }
    ],
    [
      {
        text: `\t\t<${t('CodeBlockObj.Tags.Product')}>`,
        color: theme.palette.text.secondary
      },
      {
        text: ' MicroSCADA Pro DMS600 ',
        color: theme.palette.text.primary
      },
      {
        text: `</${t('CodeBlockObj.Tags.Product')}>`,
        color: theme.palette.text.secondary
      }
    ],
    [
      {
        text: `\t\t<${t('CodeBlockObj.Tags.Position')}>`,
        color: theme.palette.text.secondary
      },
      {
        text: ` ${t('CodeBlockObj.PositionText')} `,
        color: theme.palette.text.primary
      },
      {
        text: `</${t('CodeBlockObj.Tags.Position')}>`,
        color: theme.palette.text.secondary
      }
    ],
    [
      {
        text: `\t</${t('CodeBlockObj.Tags.Work')}>`,
        color: theme.palette.text.secondary
      }
    ],
    [
      {
        text: `\t<${t('CodeBlockObj.Tags.Studies')}>`,
        color: theme.palette.text.secondary
      }
    ],
    [
      {
        text: `\t\t<${t('CodeBlockObj.Tags.Place')}>`,
        color: theme.palette.text.secondary
      },
      {
        text: ` ${t('CodeBlockObj.StudyPlaceText')} `,
        color: theme.palette.text.primary
      },
      {
        text: `</${t('CodeBlockObj.Tags.Place')}>`,
        color: theme.palette.text.secondary
      }
    ],
    [
      {
        text: `\t\t<${t('CodeBlockObj.Tags.Masters')}>`,
        color: theme.palette.text.secondary
      },
    ],
    [
      {
        text: `\t\t\t<${t('CodeBlockObj.Tags.Status')}>`,
        color: theme.palette.text.secondary
      },
      {
        text: ` ${t('CodeBlockObj.Ongoing')} `,
        color: theme.palette.text.primary
      },
      {
        text: `</${t('CodeBlockObj.Tags.Status')}>`,
        color: theme.palette.text.secondary
      }
    ],
    [
      {
        text: `\t\t\t<${t('CodeBlockObj.Tags.Major')}>`,
        color: theme.palette.text.secondary
      },
      {
        text: ` ${t('CodeBlockObj.SWE')} (50 ${t('CodeBlockObj.op')}) `,
        color: theme.palette.text.primary
      },
      {
        text: `</${t('CodeBlockObj.Tags.Major')}>`,
        color: theme.palette.text.secondary
      }
    ],
    [
      {
        text: `\t\t</${t('CodeBlockObj.Tags.Masters')}>`,
        color: theme.palette.text.secondary
      },
    ],
    [
      {
        text: `\t\t<${t('CodeBlockObj.Tags.Bachelor')}>`,
        color: theme.palette.text.secondary
      },
    ],
    [
      {
        text: `\t\t\t<${t('CodeBlockObj.Tags.Major')}>`,
        color: theme.palette.text.secondary
      },
      {
        text: ` ${t('CodeBlockObj.PE')} `,
        color: theme.palette.text.primary
      },
      {
        text: `</${t('CodeBlockObj.Tags.Major')}>`,
        color: theme.palette.text.secondary
      }
    ],
    [
      {
        text: `\t\t\t<${t('CodeBlockObj.Tags.Minor')}>`,
        color: theme.palette.text.secondary
      },
      {
        text: ` ${t('CodeBlockObj.SWE')} `,
        color: theme.palette.text.primary
      },
      {
        text: `</${t('CodeBlockObj.Tags.Minor')}>`,
        color: theme.palette.text.secondary
      }
    ],
    [
      {
        text: `\t\t</${t('CodeBlockObj.Tags.Bachelor')}>`,
        color: theme.palette.text.secondary
      },
    ],
    [
      {
        text: `\t</${t('CodeBlockObj.Tags.Studies')}>`,
        color: theme.palette.text.secondary
      }
    ],
    [
      {
        text: `\t<${t('CodeBlockObj.Tags.Hobbies')}>`,
        color: theme.palette.text.secondary
      },
      {
        text: ` ${t('CodeBlockObj.HobbiesText')} `,
        color: theme.palette.text.primary
      },
      {
        text: `</${t('CodeBlockObj.Tags.Hobbies')}>`,
        color: theme.palette.text.secondary
      }
    ],
    [
      {
        text: `</${t('CodeBlockObj.Tags.MyProfile')}>`,
        color: theme.palette.text.secondary
      }
    ]
  ]
}

export default CodeBlockObj