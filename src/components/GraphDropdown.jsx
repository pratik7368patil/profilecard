import React from "react";
import {
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  Typography,
  MenuList,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import "./styling/graphDropdown.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  dropdownStyle: {
    width: 120,
    padding: "14px 20px 14px 20px",
    fontSize: "12px",
  },
}));

export default function GraphDropdown(props) {
  const { menuData } = props;
  const classes = useStyles();
  const [openMenu, setOpenMenu] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpenMenu((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpenMenu(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpenMenu(false);
    }
  }

  const prevOpen = React.useRef(openMenu);
  React.useEffect(() => {
    if (prevOpen.current === true && openMenu === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = openMenu;
  }, [openMenu]);

  return (
    <div className={classes.root}>
      <div>
        <Typography
          color="primary"
          variant="body2"
          className="dropdown-btn"
          ref={anchorRef}
          aria-controls={openMenu ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          {menuData.title}
          <KeyboardArrowDownIcon fontSize="small" />
        </Typography>

        <Popper
          open={openMenu}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    className="dropdown-style"
                    autoFocusItem={openMenu}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    {menuData.list.map((item) => (
                      <MenuItem
                        classes={{ root: classes.dropdownStyle }}
                        onClick={handleClose}
                        key={item}
                      >
                        {item}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
