import { adminBlocks } from "../../../plugins/gatsby-theme-tsv-zorneding/src/components/admin-sections";
import DepartmentTeaserList from "../../components/sections/department-teaser-list";

adminBlocks.push(new DepartmentTeaserList().admin());

export { adminBlocks };
