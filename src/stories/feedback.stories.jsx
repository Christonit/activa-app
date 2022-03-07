import React from 'react';

import {FeedbackSimple  as FeedbackSimpleComp} from '../views/feedback-simple';
import {FeedbackSimpleLike  as FeedbackSimpleLikeComp} from '../views/feedback-simple-like';

    export default {
        title: "Feedback"
    }

    export const FeedbackSimple = () => <FeedbackSimpleComp/>
    export const FeedbackSimpleLike = () => <FeedbackSimpleLikeComp/>
