import { CORE_FEATURE_NAME, CoreState } from '@core/store/core.state';
import { createFeatureSelector } from '@ngrx/store';

const featureSelector = createFeatureSelector<CoreState>(CORE_FEATURE_NAME);

