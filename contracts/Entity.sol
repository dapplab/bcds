import 'DraftCreator';
import 'Draft';

contract Entity {
  using DraftCreator for address[];

  address[] drafts;
}
