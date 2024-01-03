import React from 'react';
import {Box, Drawer, CssBaseline, Toolbar, List, Collapse, Typography, Divider, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import { Main, AppBar, DrawerHeader, drawerWidth, StyledChildrenWrapper } from '@/components/MainDrawer/style';
import { Menu as MenuIcon, ChevronLeft as ChevronLeftIcon, ExpandLess, ExpandMore } from '@mui/icons-material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
interface MainDrawerProps {
    children: React.ReactNode;
}

export default function MainDrawer({ children }: MainDrawerProps) {
  const [open, setOpen] = React.useState(false);
  const [devCategoryOpen, setDevCategoryOpen] = React.useState(false);
  const [cadastrosCategoryOpen, setCadastrosCategoryOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toggleDevCategory = () => {
    setDevCategoryOpen(!devCategoryOpen);
  };

  const toggleCadastrosCategory = () => {
    setCadastrosCategoryOpen(!cadastrosCategoryOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Maintenance Management System by ŌKEA
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        <ListItem key="Developer" disablePadding onClick={toggleDevCategory}>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Desenvolvedor" />
            {devCategoryOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={devCategoryOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem key="Tools" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Ferramentas" />
              </ListItemButton>
            </ListItem>
            <ListItem key="Info" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Informações" />
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>
        </List>
        <Divider />
        <List>
        <ListItem key="Cadastros" disablePadding onClick={toggleCadastrosCategory}>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Cadastros" />
            {cadastrosCategoryOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={cadastrosCategoryOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem key="Tools" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Perfil" />
              </ListItemButton>
            </ListItem>
            <ListItem key="Info" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Ativo" />
              </ListItemButton>
            </ListItem>
            <ListItem key="Info" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Solicitações" />
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>
        </List>
      </Drawer>
      <Main open={open} sx={{padding: 0}}>
        <StyledChildrenWrapper>
          {children}
        </StyledChildrenWrapper>
      </Main>
    </Box>
  );
}