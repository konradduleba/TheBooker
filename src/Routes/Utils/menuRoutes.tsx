import routes from '../../Routes/Utils/routes.json';
import IMenuListTypes from '../Types/IMenuListTypes';

export const menuListNotLoggedIn: IMenuListTypes[] = [{
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


export const menuListLoggedIn: IMenuListTypes[] = [{
    title: routes.home.title,
    href: routes.home.href,
},
{
    title: routes.search.title,
    href: routes.search.href,
},
{
    title: routes.global.title,
    href: routes.global.href,
},
{
    title: routes.socialNet.title,
    href: routes.socialNet.href,
},
{
    title: routes.invite.title,
    href: routes.invite.href,
},
{
    title: routes.faq.title,
    href: routes.faq.href,
},
{
    title: routes.logout.title,
    href: routes.logout.href,
}];

export const footerMenu: IMenuListTypes[] = [{
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
}];

export const quickLinks: IMenuListTypes[] = [{
    title: routes.myProfile.title,
    href: routes.myProfile.href
},
{
    title: routes.myFriends.title,
    href: routes.myFriends.href
},
{
    title: routes.myGroups.title,
    href: routes.myGroups.href
},
{
    title: routes.myParties.title,
    href: routes.myParties.href
},
{
    title: routes.myMessages.title,
    href: routes.myMessages.href
},
{
    title: routes.myAccount.title,
    href: routes.myAccount.href
},
{
    title: routes.myPrivacy.title,
    href: routes.myPrivacy.href
}];

