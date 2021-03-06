import {createSelector} from 'reselect';

const selectWebsite = state => state.website;

export const selectNavigationSwitch = createSelector(
    [selectWebsite],
    website => website.navigation_switch,
)

export const selectBrand = createSelector(
    [selectWebsite],
    website => website.brand,
)

export const selectBrandError = createSelector(
    [selectWebsite],
    website => website.brand_error,
)

export const selectLoadingBrand = createSelector(
    [selectWebsite],
    website => website.loading_brand,
);

export const selectHeroImages = createSelector(
    [selectWebsite],
    website => website.brand.hero_images,
);
export const selectNormalImages = createSelector(
    [selectWebsite],
    website => website.brand.normal_images,
)