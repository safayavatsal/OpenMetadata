/*
 *  Copyright 2023 Collate.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import { ServiceCategory } from '../../../enums/service.enum';
import { StatusType } from '../../../generated/entity/automations/workflow';
import { ConfigData } from '../../../interface/service.interface';

export interface TestConnectionProps {
  isTestingDisabled: boolean;
  connectionType: string;
  serviceCategory: ServiceCategory;
  getData: () => ConfigData | undefined;
  showDetails?: boolean;
  serviceName?: string;
  shouldValidateForm?: boolean;
  onValidateFormRequiredFields?: () => boolean;
  hostIp?: string;
}

export type TestStatus = Exclude<StatusType, 'Running'> | 'Warning' | undefined;
