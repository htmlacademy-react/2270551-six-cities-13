import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, RequestStatus} from '../../const';
import {NearbyData} from '../../types/state-types';
import {fetchOffersNearbyAction} from '../api-action';

const initialState: NearbyData = {
  nearby: [],
  fetchingStatusNearby: RequestStatus.Unsent,
};

export const nearbyData = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersNearbyAction.pending, (state) => {
        state.fetchingStatusNearby = RequestStatus.Pending;
      })
      .addCase(fetchOffersNearbyAction.fulfilled, (state, action) => {
        state.fetchingStatusNearby = RequestStatus.Success;
        state.nearby = action.payload;
      })
      .addCase(fetchOffersNearbyAction.rejected, (state) => {
        state.fetchingStatusNearby = RequestStatus.Error;
      });
  },
});
