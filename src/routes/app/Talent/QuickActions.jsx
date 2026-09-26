import {
  LuBookmark,
  LuSearch,
  LuBell,
  LuBriefcaseBusiness,
} from "react-icons/lu";

const QuickActions = () => {
  return (
    <div className="quick-action">
      <h3 className="title px-2">Quick Actions</h3>
      <div className="mt-1 flex-qa-col">
        <div className="px-2 py-2 flex-qa border-b border-ui-text">
          <div className="py-1 px-2 bg-[#448AFF4D] border border-[#00000080] rounded-sm">
            <LuBriefcaseBusiness className="icon" />
          </div>
          <div>
            <h3 className="title">Post a Job</h3>
            <p className="sub-title">Find the perfect talent</p>
          </div>
        </div>
        <div className="px-2 py-2 flex-qa border-b border-ui-text">
          <div className="py-1 px-2 bg-[#448AFF4D] border border-[#00000080] rounded-sm">
            <LuSearch className="icon" />
          </div>
          <div>
            <h3 className="title">Talent Search</h3>
            <p className="sub-title">Use advance filters</p>
          </div>
        </div>
        <div className="px-2 py-2 flex-qa border-b border-ui-text">
          <div className="py-1 px-2 bg-[#448AFF4D] border border-[#00000080] rounded-sm">
            <LuBookmark className="icon" />
          </div>
          <div>
            <h3 className="title">Saved Talents</h3>
            <p className="sub-title">View your shortlisted talents</p>
          </div>
        </div>
        <div className="px-2 py-2 flex-qa">
          <div className="py-1 px-2 bg-[#448AFF4D] border border-[#00000080] rounded-sm">
            <LuBell className="icon " />
          </div>
          <div>
            <h3 className="title">Search Alerts</h3>
            <p className="sub-title">Get notified of new talents</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
