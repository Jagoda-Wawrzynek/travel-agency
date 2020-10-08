import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, changeSearchDuration, changeSearchTagsAdd, changeSearchTagsRemove} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  changeSearchDuration: ({type, value}) => dispatch(changeSearchDuration({type, value})),
  changeSearchTagsRemove: tags => dispatch(changeSearchTagsRemove(tags)),
  changeSearchTagsAdd: tags => dispatch(changeSearchTagsAdd(tags)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
