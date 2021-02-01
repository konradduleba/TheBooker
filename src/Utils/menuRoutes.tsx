import routes from './routes.json';
import { MenuListTypes } from './globalTypes';

export const menuListNotLoggedIn: MenuListTypes[] = [{
    title: routes.login.title,
    href: routes.login.href
},
{
    title: routes.register.title,
    href: routes.register.href
},
{
    title: routes.about.title,
    href: routes.about.href
}];


export const menuListLoggedIn: MenuListTypes[] = [{
    title: routes.home.title,
    href: `/app${routes.home.href}`,
},
{
    title: routes.search.title,
    href: `/app${routes.search.href}`,
},
{
    title: routes.global.title,
    href: `/app${routes.global.href}`,
},
{
    title: routes.socialNet.title,
    href: `/app${routes.socialNet.href}`,
},
{
    title: routes.invite.title,
    href: `/app${routes.invite.href}`,
},
{
    title: routes.faq.title,
    href: `/app${routes.faq.href}`,
},
{
    title: routes.logout.title,
    href: `/app${routes.logout.href}`,
}];

export const footerMenu: MenuListTypes[] = [{
    title: routes.about.title,
    href: routes.about.href
},
{
    title: routes.contact.title,
    href: routes.contact.href
},
{
    title: routes.faq.title,
    href: routes.faq.href
},
{
    title: routes.terms.title,
    href: routes.terms.href
},
{
    title: routes.privacy.title,
    href: routes.privacy.href
}]

