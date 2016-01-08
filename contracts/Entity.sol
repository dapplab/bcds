import 'DraftCreator';
import 'Draft';

contract Entity {
  using DraftCreator for address[];

  bytes32 name;
  address[] drafts;
}
