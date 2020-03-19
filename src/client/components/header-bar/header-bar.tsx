/*
 * Copyright 2015-2016 Imply Data, Inc.
 * Copyright 2017-2019 Allegro.pl
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from "react";
import { Customization } from "../../../common/models/customization/customization";
import "./header-bar.scss";

export interface HeaderBarProps {
  customization?: Customization;
  title?: string;
}

export const HeaderBar: React.SFC<HeaderBarProps> = props => {
  const { customization, title } = props;

  let headerStyle: any = null;
  if (customization && customization.headerBackground) {
    headerStyle = {
      background: customization.headerBackground
    };
  }

  return <header className="header-bar" style={headerStyle}>
    <div className="left-bar">
      <div className="title">{title}</div>
    </div>
    <div className="right-bar">
      {props.children}
    </div>
  </header>;
};
