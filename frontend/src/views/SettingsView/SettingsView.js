import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
// Material UI Components
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
// Material UI Icons
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { makeStyles, useTheme } from "@material-ui/styles";
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import BackgroundPaper from "../../components/BackgroundPaper/BackgroundPaper";
// Custom Components
import GridContainer from "../../components/GridContainer/GridContainer";
import Selector from "../../components/Selector/Selector";
import ViewWrapper from "../../components/ViewWrapper/ViewWrapper";
import { setLanguage } from "../../reducers/languageReducer";
// Reducers
import { setTheme } from "../../reducers/themeReducer";
import { getByName, languages } from "../../utils/languageUtil";
// Services
import { availableThemes, getThemeByName } from "../../utils/themeUtil";

const useStyles = makeStyles((theme) => ({
  root: { marginRight: theme.spacing(1) },
}));

const Autosave = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <GridContainer vertical="center" horizontal="flex-end">
      <CheckCircleOutlineIcon
        className={classes.root}
        htmlColor={theme.palette.success.main}
      />
      {t("SettingsView.Autosave.label")}
    </GridContainer>
  );
};

const SettingsView = () => {
  const { t, i18n } = useTranslation();
  const d = useDispatch();

  const theme = useSelector((store) => store.theme);
  const language = useSelector((store) => store.language);

  const handleThemeChange = (event) => {
    d(setTheme(getThemeByName(event.target.value)));
  };

  const handleLanguageChange = (event) => {
    const langObj = getByName(event.target.value);
    i18n.changeLanguage(langObj["short"]);
    d(setLanguage(langObj));
  };

  return (
    <ViewWrapper header footer fullMain>
      <GridContainer>
        <Grid item md={9}>
          <BackgroundPaper>
            <GridContainer direction="column" vertical="stretch">
              <Typography variant="h3" gutterBottom>
                {t("SettingsView.title")}
              </Typography>
              <Container maxWidth="sm">
                <Typography variant="subtitle1" display="block" gutterBottom>
                  {t("SettingsView.description")}
                </Typography>
              </Container>
              <Selector
                label={t("ThemeSelection.label")}
                value={theme.name}
                handleChange={handleThemeChange}
                menuItems={availableThemes.map((curTheme) => (
                  <MenuItem key={curTheme.name} value={curTheme.name}>
                    {t(`ThemeSelection.ThemeNames.${curTheme.name}`)}
                  </MenuItem>
                ))}
              />
              <Divider />{" "}
              <Selector
                label={t("LanguageSelection.label")}
                value={language.name}
                handleChange={handleLanguageChange}
                menuItems={languages.map((lang) => (
                  <MenuItem key={lang.short} value={lang.name}>
                    {lang.name}
                  </MenuItem>
                ))}
              />
              <Autosave />
            </GridContainer>
          </BackgroundPaper>
        </Grid>
      </GridContainer>
    </ViewWrapper>
  );
};

export default SettingsView;
